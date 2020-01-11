'use strict'
const store = require('../store')
const questionsTemplate = require('../templates/question-listing.handlebars')
const questionsTemplate2 = require('../templates/question-listing2.handlebars')
// const question-expand.handlebars
const surveysTemplate = require('../templates/survey-listing.handlebars')
// const mySurveysTemplate = require('../templates/my-survey-listing.handlebars')

const onCreateQuestionSuccess = () => {
  $('#questionModal-header').text('Successfully Created A New Question!')
  $('#questionModal-header').css('background-color', 'green')
  $('#questionModal-form').get(0).reset()
  setTimeout(() => {
    $('#questionModal-header').text('Create New Survey')
    $('#questionModal-header').css('background-color', 'white')
  }, 3000)
  $('#questionModal').modal('hide')
  $('.user-settings').hide()
}

const onCreateQuestionFailure = () => {
  $('#questionModal-form').get(0).reset()
  $('#questionModal-header').text('Please fill all fields')
  $('#questionModal-header').css('background-color', 'red')
  setTimeout(() => {
    $('#questionModal-header').text('Create New Survey')
    $('#questionModal-header').css('background-color', 'white')
  }, 3000)
}

const onGetQuestionsSuccess = data => {
  const questionsHtml = questionsTemplate({ questions: data.questions })
  $('#result-message').html(questionsHtml)
  $('#result-message').show()
  $('.user-settings').hide()
  $('.update-question').hide()
}

const onGetQuestionsFailure = data => {
  $('#result-message').text('Something went wrong')
  console.error(data)
}

const onGetQuestionSuccess = data => {
  const question = data.question
  $('#result-message').html(`
    <h6>Title:</h6>
    ${question.title} </br>
    <h6>Choices:</h6>
    ${question.choice1}</br>
    ${question.choice2}</br>
    ${question.choice3}</br>
    ${question.choice4}</br>
    <h6>User:</h6>
    ${question.owner.email}
  `)
  $('.user-settings').hide()

}

const updateQuestionSuccess = data => {
  // $('.update-delete').text('You successfuly updated one of your questions!')
  $('form').trigger('reset')
  // $('.update-delete').fadeIn().fadeOut(1500)
  $('#update-question').hide()
  // delete stored question ID upon success
  store.updateQuestionId = ''
  $('.user-settings').hide()
}

const onTakeSurveySuccess = data => {
  const surveyHtml = surveysTemplate({ questions: data.questions })
  $('#result-message').html(surveyHtml)
  $('#result-message').show()
  $('.user-settings').hide()
}

const onSelectSurveySuccess = data => {
  $('#result-message').html(`
<div class="large-html">
      ${data.question.title} </br>
      </div>
      <form>
      <button class="btn btn-info survey-submit-btn" name="question[choice]" value="1"><div class="choices">${data.question.choice1}</div></button></br>
      </form>
      <form>
      <button class="btn btn-info survey-submit-btn" name="question[choice]" value="2"><div class="choices">${data.question.choice2}</div></button></br>
      </form>
      <form>
      <button class="btn btn-info survey-submit-btn" name="question[choice]" value="3"><div class="choices">${data.question.choice3}</div></button></br>
      </form>
      <form>
      <button class="btn btn-info survey-submit-btn" name="question[choice]" value="4"><div class="choices">${data.question.choice4}</div></button></br>
      </form>
    `)
  $('.user-settings').hide()
}

const onSelectSurveyFailure = () => {
  $('#result-message').text('Something went wrong')
}

const onSubmitSurveySuccess = data => {
  const surveyHtml = surveysTemplate({ questions: data.questions })
  $('#result-message').html(surveyHtml)
  $('.survey-action-message').html('Vote Submitted!')
    .show().fadeOut(1000)
}

const onSubmitSurveyFailure = () => {
  $('#result-message').text('Failed Vote Submission')
}

const getMySurveySuccess = data => {
  const mySurveyHtml = questionsTemplate2({ questions: data.questions })
  $('#result-message').html(mySurveyHtml)
  $('#result-message').show()
  $('.user-settings').hide()
  $('.update-question').hide()
}

const getMySurveyFailure = () => {
  $('#result-message').text('Something went wrong')
}

const onDeleteQuestionFailure = data => {
  $('#result-message').html('FAILED')
}

const onShowUpdateQuestionFailure = () => {
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
  onSelectSurveyFailure,
  onSubmitSurveySuccess,
  onSubmitSurveyFailure,
  getMySurveySuccess,
  getMySurveyFailure,
  onDeleteQuestionFailure,
  onShowUpdateQuestionFailure
}
