<<<<<<< HEAD
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

=======
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onGetQuestions = event => {
  event.preventDefault()
  api.getQuestions()
    .then(ui.onGetQuestionsSuccess)
    .catch(ui.onGetQuestionsFailure)
}

const addHandlers = event => {
  $('#get-questions').on('click', onGetQuestions)
}
>>>>>>> Added get all questions api.js events.js ui.js
module.exports = {
  addHandlers
}
