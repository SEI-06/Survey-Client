'use strict'

const config = require('../config')
const store = require('../store')

const createQuestion = formData => {
  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const getQuestions = () => {
  return $.ajax({
    url: config.apiUrl + '/questions',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  getQuestions,
  createQuestion
}
