'use strict'

const config = require('../config')
const store = require('../store')

const createResponse = (userId, choiceId, questionId) => {
  return $.ajax({
    url: config.apiUrl + '/responses/' + questionId,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'response': {
        'owner': userId,
        'choice': choiceId,
        'questionOwner': questionId
      }
    }
  })
}

const getResponses = () => {
  return $.ajax({
    url: config.apiUrl + '/responses',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const updateResponse = (formData, responseId) => {
//   return $.ajax({
//     url: config.apiUrl + '/responses/' + responseId,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
//
const deleteResponse = responseId => {
  return $.ajax({
    url: config.apiUrl + '/responses/' + responseId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
// const getOneResponse = responseId => {
//   return $.ajax({
//     url: config.apiUrl + '/responses/' + responseId,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  getResponses,
  // getOneResponse,
  createResponse,
  // updateResponse,
  deleteResponse
}
