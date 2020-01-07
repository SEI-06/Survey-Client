'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateQuestion = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createQuestion(formData)
    .then((res) => {
      ui.onCreateQuestionSuccess()
    })
    .catch(ui.onCreateQuestionFailure)
}

const addHandlers = event => {
  $('#questionModal').on('submit', onCreateQuestion)
}

module.exports = {
  addHandlers
}
