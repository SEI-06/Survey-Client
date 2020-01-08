'use strict'
const store = require('../store')
const questionsTemplate = require('../templates/question-listing.handlebars')
// const question-expand.handlebars

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
  // console.log(data)
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

module.exports = {
  onCreateQuestionSuccess,
  onCreateQuestionFailure,
  onGetQuestionsSuccess,
  onGetQuestionsFailure,
  onGetQuestionSuccess,
  updateQuestionSuccess
}
