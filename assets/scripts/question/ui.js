<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Added html for Modal to create question
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

<<<<<<< HEAD
const onCreateQuestionFailure = () => {
  $('#questionModal-form').get(0).reset()
}

module.exports = {
  onCreateQuestionSuccess
=======
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
module.exports = {
  onGetQuestionsSuccess,
  onGetQuestionsFailure
>>>>>>> Added get all questions api.js events.js ui.js
=======
const onCreateSnowboardFailure = () => {
  $('#snowboardModal-form').get(0).reset()
}

module.exports = {
  onCreateSnowboardSuccess
>>>>>>> Added html for Modal to create question
}
