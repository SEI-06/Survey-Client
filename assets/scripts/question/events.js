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
    .then(data => {
      onMySurvey(event)
    })
    .then(ui.onCreateQuestionSuccess)
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
    .catch()
}

const onShowUpdateQuestion = event => {
  store.updateQuestionId = ''
  const updateQuestionId = $(event.target).data('id')
  store.updateQuestionId = updateQuestionId
  api.getOneQuestion(updateQuestionId)
    .then(
      (data) => {
        if (data.question.owner._id === store.user._id) {
          $('#update-question').show()
          $('.qtitle').html(data.question.title)
          $('.qchoice1').val(data.question.choice1)
          $('.qchoice2').val(data.question.choice2)
          $('.qchoice3').val(data.question.choice3)
          $('.qchoice4').val(data.question.choice4)
        } else {
          $('.warning-messages').html('You cannot modify other user\'s survey')
            .fadeIn().fadeOut(1500)
        }
      })
    .catch(ui.onShowUpdateQuestionFailure)
}

const onUpdateQuestions = event => {
  event.preventDefault()
  const form = event.target
  const questionData = getFormFields(form)
  const questionId = store.updateQuestionId
  api.updateQuestion(questionData, questionId)
    .then(function (data) {
      onGetQuestions(event)
    })
    .then(ui.updateQuestionSuccess)
    .catch(ui.updateQuestionFailure)
}

const onDeleteQuestion = event => {
  const deleteQuestionId = $(event.target).data('id')
  api.getOneQuestion(deleteQuestionId)
    .then(data => {
      if (data.question.owner._id === store.user._id) {
        api.deleteQuestion(deleteQuestionId)
          .then(data => {
            onMySurvey(event)
          })
          .then(() => {
            responseApi.getResponses()
              .then(data => {
                const response = data.responses
                for (let i = 0; i < response.length; i++) {
                  if (!response[i].questionOwner) {
                    responseApi.deleteResponse(response[i]._id)
                  }
                }
              })
          })
          .catch(ui.onDeleteQuestionFailure)
      } else {
        $('.warning-messages').html('You do not own this question')
          .fadeIn().fadeOut(1500)
      }
    })
}

const onTakeSurvey = event => {
  api.getQuestions()
    .then(ui.onTakeSurveySuccess)
    .catch(ui.onTakeSurveyFailure)
  $('.update-question').hide()
}

const onSelectSurvey = event => {
  const questionId = $(event.target).data('id')
  store.responseQId = questionId
  api.getOneQuestion(questionId)
    .then(ui.onSelectSurveySuccess)
    .catch(ui.onSelectSurveyFailure)
}

const onSubmitSurvey = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const questionId = store.responseQId
  const choiceId = formData.question.choice
  const userId = store.user._id
  api.getQuestions()
    .then(ui.onSubmitSurveySuccess)
    .catch(ui.onSubmitSurveyFailure)
  responseApi.createResponse(userId, choiceId, questionId)
    .then()
    .catch(ui.onSubmitSurveyFailure)
}
const onMySurvey = events => {
  const userId = store.user._id
  api.getMySurvey(userId)
    .then(ui.getMySurveySuccess)
    .catch(ui.getMySurveyFailure)
}

const onCreateQ = event => {
  event.preventDefault()
  $('#questionModal-form').trigger('reset')
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
  $('.my-survey').on('click', onMySurvey)
  $('.create-btn').on('click', onCreateQ)
}

module.exports = {
  addHandlers
}
