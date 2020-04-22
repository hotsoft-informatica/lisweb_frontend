submit: (e) ->
    self  = @
    if @get("isSubmitting")
      return
    #Métodos internos para facilitação de uso.
    model = @get("model")
    @beforeValidate()
    clientValidation = @validateClient()
    success          = clientValidation[0]
    errorInformation = clientValidation[1]
    @afterValidateClient(success, errorInformation)
    if success
      if model
        self.handleModelSubmit(model)
      else
        self.internalSubmit(errorInformation)
    else
      self.internalShowErrors(errorInformation)



  #Para processamento específico do salvamento do model.
  handleModelSubmit: (model) ->
    self = @
    @showLoadIndicator(
      (onLoadComplete) ->
        model.save().then(
          (solvedModel) ->
            onLoadComplete()
            self.internalSubmit(solvedModel)
          (errors) ->
            onLoadComplete()
            self.internalShowErrors(modelError: true, errors: errors)
        )
)
