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

module.exports = {
  onCreateQuestionSuccess
}
