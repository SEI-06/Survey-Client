const store = require('../store')

const xss = require('xss')

const onIndexResultsSuccess = (data) => {
  const questionId = store.resultQuestionId
  const answerChoices = []
  let count1 = 0
  let count2 = 0
  let count3 = 0
  let count4 = 0
  const choiceStr = []
  const response = data.responses
  let questionTitle = ''
  for (let i = 0; i < response.length; i++) {
    if (response[i].questionOwner) {
      if (questionId === response[i].questionOwner._id) {
        answerChoices.push(response[i].choice)
        choiceStr.push(response[i].questionOwner.choice1)
        choiceStr.push(response[i].questionOwner.choice2)
        choiceStr.push(response[i].questionOwner.choice3)
        choiceStr.push(response[i].questionOwner.choice4)
        questionTitle = response[i].questionOwner.title
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
  // const ctx = $('#result-chart')[0].getContext('2d')
  // console.log(ctx)
  // const myChart = new Chart(ctx, {
  //
  //   type: 'bar',
  //   data: {
  //     labels: ['choiceStr', 'choiceStr', 'choiceStr', 'choiceStr'],
  //     datasets: [{
  //       label: 'votes',
  //       data: [1, 10, 3, 4]
  //     }]
  //   }
  // })

  if (!choiceStr[0]) {
    $('.warning-messages').html('No one answered yet')
      .fadeIn().fadeOut(3000)
  } else {
    const chart = `
      <canvas id="myChart" max-width="400" height="400">
      </canvas>
      <script>
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['${xss(choiceStr[0])}', '${xss(choiceStr[1])}', '${xss(choiceStr[2])}', '${xss(choiceStr[3])}'],
              datasets: [{
                  label: '# of votes',
                  data: [${count1}, ${count2}, ${count3}, ${count4}],
                  backgroundColor: [
                    '#0275d8',
                    '#5cb85c',
                    '#5bc0de',
                    '#f0ad4e'
                  ]
                }]
              },
              options:{
                title: {
                  display: true,
                  text:'${xss(questionTitle)}',
                  fontSize: 25
                },
                responsive: false,
                legend: {
                  display: false
                }
              }
            })

    </script>
    `
    $('#result-message').html(chart)
  }
  $('.update-question').hide()
}

module.exports = {
  onIndexResultsSuccess
}
