'use strict'
const store = require('../store')
const questionsTemplate = require('../templates/question-listing.handlebars')
// const question-expand.handlebars
const surveysTemplate = require('../templates/survey-listing.handlebars')
const mySurveysTemplate = require('../templates/my-survey-listing.handlebars')

const onCreateQuestionSuccess = () => {
  $('#questionModal-header').text('Successfully Created A New Question!')
  $('#questionModal-header').css('background-color', 'green')
  $('#questionModal-form').get(0).reset()
  setTimeout(() => {
    $('#questionModal-header').text('Add A New Question')
    $('#questionModal-header').css('background-color', 'white')
  }, 3000)
}

const onCreateQuestionFailure = () => {
  $('#questionModal-form').get(0).reset()
}

const onGetQuestionsSuccess = data => {
  const questionsHtml = questionsTemplate({ questions: data.questions })
  $('#result-message').html(questionsHtml)
}

const onGetQuestionsFailure = data => {
  console.error(data)
}

const onGetQuestionSuccess = data => {
  $('#result-message').html(`
    <h6>Title:</h6>
    ${data.question.title} </br>
    <h6>Choices:</h6>
    ${data.question.choice1}</br>
    ${data.question.choice2}</br>
    ${data.question.choice3}</br>
    ${data.question.choice4}</br>
    <h6>User:</h6>
    ${data.question.owner.email}
  `)
}

const updateQuestionSuccess = data => {
  // $('.update-delete').text('You successfuly updated one of your questions!')
  $('form').trigger('reset')
  // $('.update-delete').fadeIn().fadeOut(1500)
  $('#update-question').hide()
  // delete stored question ID upon success
  store.updateQuestionId = ''
}

const onTakeSurveySuccess = data => {
  const surveyHtml = surveysTemplate({ questions: data.questions })
  $('#result-message').html(surveyHtml)
}

const onSelectSurveySuccess = data => {
  $('#result-message').html(`
    <form>
      <h6>Title:</h6>
      ${data.question.title} </br>
      <h6>Choices:</h6>
      <input type="radio" name="question[choice]" value="1" checked> ${data.question.choice1}</br>
      <input type="radio" name="question[choice]" value="2"> ${data.question.choice2}</br>
      <input type="radio" name="question[choice]" value="3"> ${data.question.choice3}</br>
      <input type="radio" name="question[choice]" value="4"> ${data.question.choice4}</br>
      <button class="survey-submit-btn"> submit </button>
      <pre id="log"></pre>
      </form>
    `)
}
const onSubmitSurveySuccess = data => {
  const surveyHtml = surveysTemplate({ questions: data.questions })
  $('#result-message').html(surveyHtml)
  $('.survey-action-message').html('Survey Suibmitted Successfully')
    .fadeIn().fadeOut(1500)
}

const getMySurveySuccess = data => {
  const mySurveyHtml = mySurveysTemplate({ questions: data.questions })
  $('#result-message').html(mySurveyHtml)
}

const getMySurveyFailure = () => {
  $('#result-message').text('Something went wrong')
}

module.exports = {
  onCreateQuestionSuccess,
  onCreateQuestionFailure,
  onGetQuestionsSuccess,
  onGetQuestionsFailure,
  onGetQuestionSuccess,
  updateQuestionSuccess,
  onTakeSurveySuccess,
  onSelectSurveySuccess,
  onSubmitSurveySuccess,
  getMySurveySuccess,
  getMySurveyFailure
}
