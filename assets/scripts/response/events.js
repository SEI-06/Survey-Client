const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onClickRead = event => {
  store.resultQuestionId = $(event.target).data('id')
  api.getResponses()
    .then(ui.onindexResultsSuccess)
}
const addHandlers = event => {
  $('.question-box').on('click', '.see-results', onClickRead)
}

module.exports = {
  addHandlers
}
