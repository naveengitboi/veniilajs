
function updateTimerAndQuestion(timerIntervalForQuestion, parentEle, runInterval) {
  let questionTimeRunner = timerIntervalForQuestion;
  let currentQuestionOutput = playGame();
  let timeIntervalId = setInterval(() => {
    parentEle.innerText = questionTimeRunner;
    console.log(questionTimeRunner);
    --questionTimeRunner;
    if (questionTimeRunner < 0 || currentQuestionOutput){
      clearInterval(timeIntervalId);
      return;
    }
  }, runInterval);
}

