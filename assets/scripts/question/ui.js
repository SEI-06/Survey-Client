'use strict'

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
// const questionsTemplate = require('../templates/question-listing.handlebars')
// const question-expand.handlebars

const onGetQuestionsSuccess = data => {
  console.log(data)
  // const questionsHtml = questionsTemplate({ questions: data.questions })
  $('result-message').html(data)
}
const onGetQuestionsFailure = data => {
  console.error(data)
}

const updateQuestionSuccess = data => {
  $('.update-delete').text('You successfuly updated one of your questions!')
  $('form').trigger('reset')
  $('.update-delete').fadeIn().fadeOut(1500)
}

module.exports = {
  onCreateQuestionSuccess,
  onCreateQuestionFailure,
  onGetQuestionsSuccess,
  onGetQuestionsFailure,
  updateQuestionSuccess
}
