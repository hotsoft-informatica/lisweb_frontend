
import Component from '@ember/component'
import FormattersMixin from '../../mixins/formatters'
import {inject as service} from '@ember/service'
import {computed, set, observer} from '@ember/object'

# export default Component.extend( FormattersMixin,

#   constants: service()
#   session: service()
#   store: service()
#   globalLookups: service()
#   application: service()

 

#   # addContactInfo: ->
#   #   @get('model.addNewContactInfo').call(@get('model'))

#   # addRelatedPeople: ->
#   #   @get('model.addNewRelatedPerson').call(@get('model'))

#   # createInstallmentCredit: ->
#   #   @get('model.createInstallmentCredit').call(@get('model'))

#   # removeRelatedPerson: (r)->
#   #   if !@get('camposDisabled') and window.confirm('Deseja realmente excluir este item?')
#   #     @get('model.relatedPeople').removeObject(r)

#   # removeContactInfo: (model) ->
#   #   if !@get('camposDisabled') and window.confirm('Deseja realmente excluir este item?')
#   #     # TODO: Apenas desativar o registro, não apagar
#   #     alert('Registro removido com sucesso')

#   addNewContract: ->
#     c = @get('store').createRecord('contract', {customer: @get('model')})
#     @set('currentContract', c)
#     @get('contractEditModal').show()

#   editContract: (contract) ->
#     @set('currentContract', contract)
#     @get('contractEditModal').show()

#   saveCurrentContractEdit: ->
#     self = @
#     @get('currentContract').save({ adapterOptions: { subscribe: false}}).then(
#       ( (obj) =>
#         self.set('currentContract', null)
#         self.get('application').showAlert('Contrato salvo com sucesso!', 'success')
#         self.get('contractEditModal').hide()
#       ),
#       ((obj) =>
#         for error in obj.errors
#           field = if error.source then field = error.source.pointer.split('/').pop().toString() else ''
#           msg = field+' '+(if error.detail then error.detail else error)
#           self.get('application').showAlert(msg, 'error')
#       )
#     )
#     @set('application.buttonSpin', false)

#   cancelCurrentContractEdit: ->
#     @get('currentContract', null)
# #    @send('loadContracts')
#     @get('contractEditModal').hide()


#     params = { person_id: @get('model.id'), order: 'data_competencia desc', hide_canceled: @get('hideCanceledInvoices') }
#     self.set('searchingInvoices', true)
#     @get('store').query('lancamento', params)
#       .then(
#         (result) ->
#           self.set('invoices', result)
#           self.set('searchingInvoices', false)
#     )




#   onSubmit: (customer)->
#     @sendAction('afterSave', customer)


#   beforeValidate: ->
#     contactInfos = @get('model.contactInfos')
#     contactInfos = contactInfos.filter (c) -> !!c.get('contactType') and !!c.get('value')
#     @set('model.contactInfos', contactInfos)


#   actions:

#     saveMarca: (newMarca) -> 
#       @newMarca.save().then(() => this.transitionTo('/marcas'))

#     onCancel: (customer = null)->
#       @sendAction('onCancel', customer)

#     addContact: ->
#       @addContactInfo()


#     addRelatedPerson: ->
#       @addRelatedPeople()


#     loadContracts: ->
#       if @get('application.isAcras') and @get('model.id')
#         @set('customerContracts', @get('store').find('contract', {customer_id: @get('model.id')}))
#         @set('contractListInvalid', false)

)


