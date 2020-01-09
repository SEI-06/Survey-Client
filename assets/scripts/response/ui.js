const store = require('../store')

const onindexResultsSuccess = (data) => {
  const questionId = store.resultQuestionId
  const answerChoices = []
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let count4 = 0
  const choiceStr = []
  const response = data.responses
  // console.log('D', response)
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
    $('#result-message').html('No one answered yet')
  } else {
    $('#result-message').html(`
    ${choiceStr[0]} = ${count1} </br>
    ${choiceStr[1]} = ${count2} </br>
    ${choiceStr[2]} = ${count3} </br>
    ${choiceStr[3]} = ${count4} </br>
    `)
  }
  console.log(count1, count2, count3, count4)
}
module.exports = {
  onindexResultsSuccess
}
