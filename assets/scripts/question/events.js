'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const responseApi = require('../response/api')

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

const onGetQuestions = event => {
  event.preventDefault()
  api.getQuestions()
    .then(ui.onGetQuestionsSuccess)
    .catch(ui.onGetQuestionsFailure)
}

const onGetOneQuestion = events => {
  const questionId = $(event.target).data('id')
  api.getOneQuestion(questionId)
    .then(ui.onGetQuestionSuccess)
    .catch(console.error)
}

const onShowUpdateQuestion = event => {
  // store question ID and show update form
  store.updateQuestionId = ''
  const updateQuestionId = $(event.target).data('id')
  store.updateQuestionId = updateQuestionId
  $('#update-question').show()
}

const onUpdateQuestions = event => {
  event.preventDefault()
  const form = event.target
  const questionData = getFormFields(form)
  // get stored question ID
  const questionId = store.updateQuestionId
  // pass in question ID to api call
  api.updateQuestion(questionData, questionId)
    .then(function (data) {
      onGetQuestions(event)
    })
    .then(ui.updateQuestionSuccess)
    .catch(ui.updateQuestionFailure)
}

const onDeleteQuestion = event => {
  const deleteQuestionId = $(event.target).data('id')
  api.deleteQuestion(deleteQuestionId)
    .then(data => {
      onGetQuestions(event)
    })
    .then(() => {
      responseApi.getResponses()
        .then(data => {
          const response = data.responses
          // const responseId = []
          // responseId += data.responses[i]._id
          for (let i = 0; i < response.length; i++) {
            if (!response[i].questionOwner) {
              responseApi.deleteResponse(response[i]._id)
            }
          }
        })
    })
    .catch(ui.onDeleteQuestionFailure)
}

const onTakeSurvey = event => {
  api.getQuestions()
    .then(ui.onTakeSurveySuccess)
    .catch(ui.onTakeSurveyFailure)
}

const onSelectSurvey = event => {
  const questionId = $(event.target).data('id')
  store.responseQId = questionId
  api.getOneQuestion(questionId)
    .then(ui.onSelectSurveySuccess)
    .catch(console.error)
}

const onSubmitSurvey = event => {
  event.preventDefault()
  const form = event.target
  // console.log('event', event)
  const formData = getFormFields(form)
  const questionId = store.responseQId
  // console.log(formData.question.choice)
  const choiceId = formData.question.choice
  const userId = store.user._id
  // console.log('question id', questionId) // use it for RESPONSE
  api.getQuestions()
    .then(ui.onSubmitSurveySuccess)
    .catch(console.error)
    // make a response CREATE api call
    // pass in response choice number to api call for choice: Number
    // pass in questionId
  responseApi.createResponse(userId, choiceId, questionId)
    .then(questionId)
    // .then(data => {
    //   console.log(data.response)
    //   return api.updateQuestion2(data.response, questionId)
    // }
    // (data) => {
    //   api.updateQuestion(data)
    // }
  // )
}

const addHandlers = event => {
  $('#get-questions').on('click', onGetQuestions)
  $('#questionModal').on('submit', onCreateQuestion)
  $('.question-box').on('click', '.question-update-btn', onShowUpdateQuestion)
  $('#update-question').on('submit', onUpdateQuestions)
  $('.question-box').on('click', '.question-delete-btn', onDeleteQuestion)
  $('.question-box').on('click', '.get-question-btn', onGetOneQuestion)
  $('.take-survey').on('click', onTakeSurvey)
  $('.question-box').on('click', '.take-survey-btn', onSelectSurvey)
  $('#result-message').on('submit', onSubmitSurvey)
}

module.exports = {
  addHandlers
}
