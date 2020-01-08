const store = require('../store')

const onindexResultsSuccess = (data) => {
  const questionId = store.resultQuestionId
  const answerChoices = []
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let count4 = 0
  // console.log('D', data.responses[5].questionOwner._id)
  for (let i = 0; i < data.responses.length; i++) {
    if (questionId === data.responses[i].questionOwner._id) {
      answerChoices.push(data.responses[i].choice)
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
  $('#result-message').html(`
    1 = ${count1} </br>
    2 = ${count2} </br>
    3 = ${count3} </br>
    4 = ${count4} </br>
    `)
  console.log(count1, count2, count3, count4)
}
module.exports = {
  onindexResultsSuccess
}
