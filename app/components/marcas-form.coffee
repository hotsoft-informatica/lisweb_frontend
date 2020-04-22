
import Component from '@ember/component'
import FormattersMixin from '../../mixins/formatters'
import {inject as service} from '@ember/service'
import {computed, set, observer} from '@ember/object'

export default Component.extend( FormattersMixin,

  constants: service()
  session: service()
  store: service()
  globalLookups: service()
  application: service()

  customerContracts: []
  contractListInvalid: false
  contractEditModal: null
  invoices: []
  currentInvoice: null
  cancelInvoiceModal: null
  cancelInvoiceReason: null
  currentEmitente: null
  detachedFeesModal: null
  showGenerateDetachedFeeButton: true
  currentDetachedFee: {}
  detachedFeeBankBillUrl: ''
  advanceMonthBillingModal: null
  currentAdvanceMonthBilling: {}
  reissueInvoiceModal: null
  currentReissueInvoice: {month: (new Date().getMonth()+1), year: new Date().getFullYear()}
  issueBankBillModal: null
  currentIssueBankBill: {}
  cancelBankBillModal: null
  blockCustomerModal: null
  addReceivableModal: null
  currentReceivable: null
  currentReIssueBankBill: null
  reIssueBankBillModal: null
  hideCanceledInvoices: true


  init: ->
    @getInvoices()
    @createInstallmentCredit()
    @_super(arguments...)

  hideCanceledInvoicesChanged: observer('hideCanceledInvoices', ->
    @getInvoices()
  )

  contactInfoTypes: computed(->
    return @get('constants').contactInfo().typesWithLabel
  )

  saasPrices: computed('model', ->
    if (@get('model'))
      return @get('store').query('saas_price', {person_id: @get('model.id')})
    []
  )

  customerContracts: computed('model', 'model.contracts', 'currentContract', ->
    if @get('application.isAcras') and @get('model.id')
      return @get('store').query('contract', {customer_id: @get('model.id')})
    []
  )

  addContactInfo: ->
    @get('model.addNewContactInfo').call(@get('model'))

  addRelatedPeople: ->
    @get('model.addNewRelatedPerson').call(@get('model'))

  createInstallmentCredit: ->
    @get('model.createInstallmentCredit').call(@get('model'))

  removeRelatedPerson: (r)->
    if !@get('camposDisabled') and window.confirm('Deseja realmente excluir este item?')
      @get('model.relatedPeople').removeObject(r)

  removeContactInfo: (model) ->
    if !@get('camposDisabled') and window.confirm('Deseja realmente excluir este item?')
      # TODO: Apenas desativar o registro, não apagar
      alert('Registro removido com sucesso')

  addNewContract: ->
    c = @get('store').createRecord('contract', {customer: @get('model')})
    @set('currentContract', c)
    @get('contractEditModal').show()

  editContract: (contract) ->
    @set('currentContract', contract)
    @get('contractEditModal').show()

  saveCurrentContractEdit: ->
    self = @
    @get('currentContract').save({ adapterOptions: { subscribe: false}}).then(
      ( (obj) =>
        self.set('currentContract', null)
        self.get('application').showAlert('Contrato salvo com sucesso!', 'success')
        self.get('contractEditModal').hide()
      ),
      ((obj) =>
        for error in obj.errors
          field = if error.source then field = error.source.pointer.split('/').pop().toString() else ''
          msg = field+' '+(if error.detail then error.detail else error)
          self.get('application').showAlert(msg, 'error')
      )
    )
    @set('application.buttonSpin', false)

  cancelCurrentContractEdit: ->
    @get('currentContract', null)
#    @send('loadContracts')
    @get('contractEditModal').hide()

  getInvoices: ->
    return unless @get('application.currentDomain.isAcras')
    self = @

    params = { person_id: @get('model.id'), order: 'data_competencia desc', hide_canceled: @get('hideCanceledInvoices') }
    self.set('searchingInvoices', true)
    @get('store').query('lancamento', params)
      .then(
        (result) ->
          self.set('invoices', result)
          self.set('searchingInvoices', false)
    )

  cancelInvoice: ->
    @set('cancelInvoiceSpin', true)
    self = @
    if @get('cancelInvoiceReason') == null
      alert('Obrigatório informar motivo para não cobrar multa')
      @set('cancelInvoiceSpin', false)
    else
      ajaxParams =
        method: "POST"
        data: {motive: @get('cancelInvoiceReason')}
        global: false
      @get('store').externalAjax(ajaxParams,
        apiURL: "/web_api/lancamentos/#{self.get('currentInvoice.id')}/cancelar",
        (success, textStatus, data) ->
          if success
            toastType = 'success'
            message = "Fatura #{self.get('currentInvoice.descricao')} cancelada com sucesso!"
            self.getInvoices()
            self.get('cancelInvoiceModal').hide()
          else
            toastType = 'error'
            message = data.jqXHR.responseJSON.msg
          self.set('cancelInvoiceSpin', false)
          self.get('application').showAlert(message, toastType)
      )

  cancelInvoiceShow: (invoice)->
    @set('currentInvoice', invoice)
    @get('cancelInvoiceModal').show()

  cancelInvoiceHide: ->
    @get('currentInvoice', null)
    @get('cancelInvoiceModal').hide()

  selectEmitente: (e) ->
    @set('currentEmitente', e.record)

  addEmitente: ->
    if @get('currentContract')?
      e = @get('currentEmitente')
      e.set('cnpj', e.get('cnpj'))
      @get('currentContract').addEmitente(e)

  showDetachedFeesModal: ->
    # FIXME: retirar isso daqui e colocar um @store.createRecord decentemente
    @set('showGenerateDetachedFeeButton', true)
    @set('currentDetachedFee', {descricao: '', valor: 0.00, vencimento: new Date()})
    @get('detachedFeesModal').show()

  onSaveDetachedFee: ->
    @set('detachedFeeSpin', true)
    self = @
    ajaxParams =
      method: 'PUT'
      data: {
         customer_id: self.get('model.id'),
         description: self.get('currentDetachedFee.descricao'),
         amount:      self.get('currentDetachedFee.valor'),
         due_date:    self.get('currentDetachedFee.vencimento')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: '/web_api/saas/create_fee',
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = 'Taxa Avulsa gerada com sucesso!'
          self.set('detachedFeeBankBillUrl', data.jqXHR.responseJSON.boleto_url)
          self.set('showGenerateDetachedFeeButton', false)
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('detachedFeeSpin', false)
        self.get('application').showAlert(message, toastType)
    )

  onCancelDetachedFee: (modal)->
    modal.hide()

  showAdvanceMonthBillingModal: ->
    @set('currentAdvanceMonthBilling.month', new Date().getMonth()+1)
    @set('currentAdvanceMonthBilling.year', new Date().getFullYear())
    @get('advanceMonthBillingModal').show()

  onSaveAdvanceMonthBilling: ->
    @set('advancedMonthBillingFee', true)
    self = @
    ajaxParams =
      method: 'PUT'
      data: {
         customer_id: @get('model.id')
         month: @get('currentAdvanceMonthBilling.month')
         year: @get('currentAdvanceMonthBilling.year')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: '/web_api/saas/create_lancamentos',
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = data.jqXHR.responseJSON.msg
          self.get('advanceMonthBillingModal').hide()
          self.getInvoices()
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('advancedMonthBillingFee', false)
        self.get('application').showAlert(message, toastType)
    )

  onCancelAdvanceMonthBilling: (modal) ->
    modal.hide()

  showReissueInvoiceModal: (invoice) ->
    @set('currentReissueInvoice', {month: invoice.get('dataCompetencia').getMonth()+1, year: invoice.get('dataCompetencia').getFullYear()})
    @get('reissueInvoiceModal').show()

  onCancelReissueInvoice: (modal) ->
    @set('currentReissueInvoice', {month: (new Date().getMonth()+1), year: new Date().getFullYear()})
    modal.hide()

  onSaveReissueInvoice: ->
    @set('reissueInvoiceSpin', true)
    self = @
    ajaxParams =
      method: 'PUT'
      data: {
         customer_id: self.get('model.id')
         month: self.get('currentReissueInvoice.month')
         year: self.get('currentReissueInvoice.year')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: '/web_api/saas/recreate_receivables',
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = "Fatura para o mês "\
            + " #{self.get('currentReissueInvoice.month')}-#{self.get('currentReissueInvoice.year')} " \
            + " regerada com sucesso!"
          self.getInvoices()
          self.get('reissueInvoiceModal').hide()
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('reissueInvoiceSpin', false)
        self.get('application').showAlert(message, toastType)
    )

  showIssueBankBillModal: (invoice)->
    @set('currentInvoice', invoice)
    @set('currentIssueBankBill', {date: new Date()})
    @get('issueBankBillModal').show()

  onCancelIssueBankBill: (modal) ->
    @set('currentIssueBankBill', {})
    modal.hide()

  onSaveIssueBankBill: ->
    @set('issueBankBillSpin', true)
    self = @
    ajaxParams =
      method: 'POST'
      data: {
        customer_id: self.get('model.id')
        dueDate: self.get('currentIssueBankBill.date')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: "/web_api/lancamentos/#{self.get('currentInvoice.id')}/create_boleto",
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = "Boleto para o lancamento #{self.get('currentInvoice.id')} criado com sucesso!"
          self.get('issueBankBillModal').hide()
          self.getInvoices()
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('issueBankBillSpin', false)
        self.get('application').showAlert(message, toastType)
    )

  showCancelBankBillModal: (bankBill) ->
    @set('currentCancelBankBill', bankBill)
    @get('cancelBankBillModal').show()

  onCancelBankBill: ->
    @set('cancelBankBillSpin', true)
    self = @
    if !@get('cancelBankBillReason')
      alert('Preencher o motivo do Cancelamento!')
      self.set('cancelBankBillSpin', true)
      return
    ajaxParams =
      method: "POST"
      data: {
         customer_id: self.get('model.id')
         reason: self.get('cancelBankBillReason')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: "/web_api/boletos/#{@get('currentCancelBankBill.id')}/cancel",
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = "Boleto #{self.get('currentCancelBankBill.id')} cancelado com sucesso!"
          self.get('cancelBankBillModal').hide()
          self.getInvoices()
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('cancelBankBillSpin', false)
        self.get('application').showAlert(message, toastType)
    )

  onIssueNFSe: (invoice) ->
    invoice_date = @formatDate(invoice.get('dataCompetencia'), {format: 'MMMM YYYY'})
    confirmation_text = "Confirma a emissão da NFSE Para o lancamento #{invoice.get('id')} " \
      + " [$ #{invoice.get('valor')}] do mês #{invoice_date}?"
    if window.confirm(confirmation_text)
      self = @
      ajaxParams =
        method: 'POST'
        data: {
          customer_id: @get('model.id')
        }
        global: false
      @get('store').externalAjax(ajaxParams,
          apiURL: "/web_api/lancamentos/#{invoice.get('id')}/create_nfse",
          (success, textStatus, data) ->
            if success
              toastType = 'success'
              message = "Nota para o Lançamento #{invoice.get('id')} gerada com sucesso!"
              self.get('cancelBankBillModal').hide()
              self.getInvoices()
            else
              toastType = 'error'
              message = data.jqXHR.responseJSON.msg
            self.get('application').showAlert(message, toastType)
      )

  deactivateCustomer: ->
    self = @
    if confirm('Confirma a DESATIVAÇÃO do Cliente?')
      @set('model.active', false)
      @get('model').save().then(
        ( (obj) =>
          self.get('application').showAlert('Cliente desativado com sucesso!', 'success')
        ),
        (() =>
          self.get('application').showAlert('Erro ao desativar Cliente!', 'error')
        )
      )

  activateCustomer: ->
    self = @
    if confirm('Confirma a ATIVAÇÃO do Cliente?')
      @set('model.active', true)
      @get('model').save().then(
        ( (obj) =>
          self.get('application').showAlert('Cliente ativado com sucesso!', 'success')
        ),
        (() =>
          self.get('application').showAlert('Erro ao ativar Cliente!', 'error')
        )
      )

  showBlockCustomerModal: ->
    @get('blockCustomerModal').show()

  blockCustomer: ->
    self = @
    if !!@get('model.reasonBlocked')
      @set('model.blocked', true)
      @get('model').save().then(
        ( (obj) =>
          self.get('application').showAlert('Cliente bloqueado com sucesso!', 'success')
        ),
        (() =>
          self.get('application').showAlert('Erro ao bloquear Cliente!', 'error')
        )
      )
      @get('blockCustomerModal').hide()

  unblockCustomer: ->
    self = @
    if confirm('Confirma o DESBLOQUEIO do Cliente?')
      @set('model.blocked', false)
      @get('model').save().then(
        ( (obj) =>
          self.get('application').showAlert('Cliente desbloqueado com sucesso!', 'success')
        ),
        (() =>
          self.get('application').showAlert('Erro ao desbloquear Cliente!', 'error')
        )
      )

  showAddReceivableModal: ->
    r = @get('store').createRecord('receivable', {})
    r.set('customer', @get('model'))
    r.set('status', 'open')
    r.set('month', (new Date().getMonth()+1))
    r.set('year', new Date().getFullYear())
    @set('currentReceivable', r)
    @get('addReceivableModal').show()

  onSaveReceivable: ->
    @set('receivableSpin', true)
    self = @
    @get('currentReceivable').save().then(
      ((obj) =>
        self.get('application').showAlert('Recebível cadastrado com sucesso!', 'success')
        self.get('addReceivableModal').hide()
        self.set('receivableSpin', false)
      ),
      ((obj) =>
        if obj.errors
          for e in obj.errors
            field = e.source.pointer.split('/').pop().toString()
            msg = field +' '+ e.detail
            self.get('application').showAlert(msg, 'error')
          return
        self.set('receivableSpin', false)
        self.get('application').showAlert('Ocorreu um erro ao salvar o recebível.', 'error')
      )
    )

  onCancelSaveReceivable: (modal) ->
    @set('currentReceivable', {})
    modal.hide()

  reIssueBankBill: (bankBill)->
    reIssueBankBill =
      id: bankBill.get('id')
      dueDate: new Date()
      applyFine: false
      discount: 0.0
      reason: ''
    @set('currentReIssueBankBill', reIssueBankBill)
    @get('reIssueBankBillModal').show()

  onSaveReIssueBankBill: ->
    @set('reissueBankBillSpin', true)
    self = @
    if !self.get('currentReIssueBankBill.reason')
      alert('Preencher o motivo da reemissão do boleto!')
      self.set('reissueBankBillSpin', false)
      return
    ajaxParams =
      method: 'POST'
      data: {
        new_due_date: self.get('currentReIssueBankBill.dueDate')
        apply_fine: self.get('currentReIssueBankBill.applyeFine')
        discount_percent: self.get('currentReIssueBankBill.discount')
        boleto_id: self.get('currentReIssueBankBill.id')
        motive: self.get('currentReIssueBankBill.reason')
      }
      global: false
    @get('store').externalAjax(ajaxParams,
      apiURL: "/web_api/boletos/#{self.get('currentReIssueBankBill.id')}/recreate",
      (success, textStatus, data) ->
        if success
          toastType = 'success'
          message = "Boleto reemitido com sucesso!"
          self.get('reIssueBankBillModal').hide()
          self.getInvoices()
        else
          toastType = 'error'
          message = data.jqXHR.responseJSON.msg
        self.set('reissueBankBillSpin', false)
        self.get('application').showAlert(message, toastType)
    )

  onCancelReIssueBankBill: (modal) ->
    @set('currentReIssueBankBill', {})
    modal.hide()


  fillAddressFields: (params) ->
    if params['valido']
      self = @
      self.set('fetchingCep', true)
      codigoMunicipio = params['endereco']['ibge']
      @get('store').queryRecord('municipio', {codigo_municipio: codigoMunicipio}).then (obj) ->
        cidade = obj
        logradouro = params['endereco']['logradouro']
        bairro = params['endereco']['bairro']
        pais = params['endereco']['país']
        self.set('model.defaultAddress.municipio', cidade)
        self.set('model.defaultAddress.logradouro', logradouro)
        self.set('model.defaultAddress.bairro', bairro)
        self.set('model.defaultAddress.pais', pais) if !!pais
        self.set('cidadeDisabled', !!cidade)
        self.set('logradouroDisabled', !!logradouro)
        self.set('bairroDisabled', !!bairro)
        self.set('fetchingCep', false)


  onSubmit: (customer)->
    @sendAction('afterSave', customer)


  beforeValidate: ->
    contactInfos = @get('model.contactInfos')
    contactInfos = contactInfos.filter (c) -> !!c.get('contactType') and !!c.get('value')
    @set('model.contactInfos', contactInfos)


  actions:

    onCancel: (customer = null)->
      @sendAction('onCancel', customer)


    addContact: ->
      @addContactInfo()


    addRelatedPerson: ->
      @addRelatedPeople()


    loadContracts: ->
      if @get('application.isAcras') and @get('model.id')
        @set('customerContracts', @get('store').find('contract', {customer_id: @get('model.id')}))
        @set('contractListInvalid', false)

)


