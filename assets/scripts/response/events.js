const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onClickRead = event => {
  store.resultQuestionId = $(event.target).data('id')
  api.getResponses()
    .then(ui.onIndexResultsSuccess)
}

const onGetRes = event => {
  api.getResponses()
    .then(ui.onShowAllResSuccess)
    .catch(ui.onGetQuestionsFailure)
}

const onDelNulRes = event => {

}
const addHandlers = event => {
  $('.question-box').on('click', '.see-results', onClickRead)
  $('.res-list').on('click', onGetRes)
  $('.del-null-res').on('click', onDelNulRes)
}

module.exports = {
  addHandlers
}
