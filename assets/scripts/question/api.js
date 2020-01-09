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

const updateQuestion = (formData, questionId) => {
  return $.ajax({
    url: config.apiUrl + '/questions/' + questionId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const deleteQuestion = questionId => {
  return $.ajax({
    url: config.apiUrl + '/questions/' + questionId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getOneQuestion = questionId => {
  return $.ajax({
    url: config.apiUrl + '/questions/' + questionId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getMySurvey = myId => {
  return $.ajax({
    url: config.apiUrl + '/mysurvey/' + myId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getQuestions,
  getOneQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getMySurvey
}
