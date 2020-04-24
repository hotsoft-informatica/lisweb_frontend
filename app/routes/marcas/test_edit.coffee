import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default Route.extend(

  model: (params) ->
    @get('store').findRecord('marca', params['id'], {reload: true})

  actions:
    afterSave: (marca)->
      @transitionTo('marcas/index')

    onCancel: (marca)->
      @transitionTo('marcas/index’)
)
