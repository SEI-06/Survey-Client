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
  $('#signUpModal').modal('hide')
}

const onSignUpFailure = () => {
  $('#signUpModal-header').text('Failed to sign up')
  $('#signUpModal-header').css('background-color', 'red')
  $('#sign-up').get(0).reset()
  setTimeout(() => {
    $('#signUpModal-header').text('Sign Up')
    $('#signUpModal-header').css('background-color', 'white')
  }, 3000)
  // $('#signUpModal').modal('hide')
  // onFailure('Uh oh... something went wrong! Try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  console.log(store.user)
  onSuccess('You successfully signed in.')
  $('.after-auth').show()
  $('.before-auth').hide()
  $('#signInModal').modal('hide')
}

const onSignInFailure = () => {
  $('#signInModal-header').text('Failed to sign in. Try again.')
  $('#signInModal-header').css('background-color', 'red')
  $('#sign-in').get(0).reset()
  setTimeout(() => {
    $('#signInModal-header').text('Sign In')
    $('#signInModal-header').css('background-color', 'white')
  }, 3000)
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
  $('.update-question').hide()
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
