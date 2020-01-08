'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#user-message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('#user-message').fadeIn().fadeOut(1500)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#user-message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('#user-message').fadeIn().fadeOut(1500)
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess('You successfully signed up. Now, sign in.')
}

const onSignUpFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store.user)
  onSuccess('You successfully signed in.')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onChangePasswordSuccess = () => {
  onSuccess('You successfully changed your password.')
}

const onChangePasswordFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const onSignOutSuccess = () => {
  $('.v').hide()
  onSuccess('You successfully signed out.')
  // below, the store no longer knows who we are. delete the token.
  store.user = {}
  $('.before-auth').show()
  $('.after-auth').hide()
  $('.question-box').html('')
  $('#result-message').hide()
}

const onSignOutFailure = () => {
  onFailure('Uh oh... something went wrong! Try again.')
}

const accountOptionsSuccess = () => {
  $('.v').hide()
  $('.user-settings').show()
}

const accountOptionsFailure = () => {

}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  accountOptionsSuccess,
  accountOptionsFailure
}
