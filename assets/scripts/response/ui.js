const store = require('../store')

const onIndexResultsSuccess = (data) => {
  const questionId = store.resultQuestionId
  const answerChoices = []
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let count4 = 0
  const choiceStr = []
  const response = data.responses
  for (let i = 0; i < response.length; i++) {
    if (response[i].questionOwner) {
      if (questionId === response[i].questionOwner._id) {
        answerChoices.push(response[i].choice)
        choiceStr.push(response[i].questionOwner.choice1)
        choiceStr.push(response[i].questionOwner.choice2)
        choiceStr.push(response[i].questionOwner.choice3)
        choiceStr.push(response[i].questionOwner.choice4)
      }
    }
  }
  for (let i = 0; i < answerChoices.length; i++) {
    if (answerChoices[i] === 1) {
      count1 += 1
    } else if (answerChoices[i] === 2) {
      count2 += 1
    } else if (answerChoices[i] === 3) {
      count3 += 1
    } else if (answerChoices[i] === 4) {
      count4 += 1
    }
  }
  if (!choiceStr[0]) {
    $('.warning-messages').html('No one answered yet')
      .fadeIn().fadeOut(3000)
  } else {
    $('#result-message').html(`
    ${choiceStr[0]} = ${count1} </br>
    ${choiceStr[1]} = ${count2} </br>
    ${choiceStr[2]} = ${count3} </br>
    ${choiceStr[3]} = ${count4} </br>
    `)
  }
}

const onShowAllResSuccess = (data) => {
  let html = ''
  for (let i = 0; i < data.responses.length; i++) {
    html += `
    Response Id, ${data.responses[i]._id} </br>
    Response user, ${data.responses[i].owner.email} </br>
    User choice, ${data.responses[i].choice} </br>
    `
    if (!data.responses[i].questionOwner) {
      html += `<div class='warning'> question data null</br> </div>`
    } else {
      html +=
            `
            <div class='good'> Question Id, ${data.responses[i].questionOwner._id} </br></div>
            `
    }
  }
  $('#result-message').html(html)
}

module.exports = {
  onIndexResultsSuccess,
  onShowAllResSuccess
}
