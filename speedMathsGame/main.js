const score = document.querySelector(".score");
const firstNum = document.querySelector(".firstNumber");
const operator = document.querySelector(".operator");
const secondNum = document.querySelector(".secondNumber");
const inputAnswer = document.querySelector(".answer");
const newGame = document.querySelector(".newGame");
const startGameEle = document.querySelector('.startBtn')

const history = [];

let operatorSymbol = ["*", "+", "-", "/"];
let points = 0;

let scoreCard = {
  "correct": [],
  "incorrect": [],
}

function getRandomNumber(minRange, maxRange) {
  let randInt = Math.floor(
    Math.random() * (maxRange - minRange + 1) + minRange,
  );
  return randInt;
}

function getValues(minRange, maxRange) {
  let ope = operatorSymbol[getRandomNumber(0, 3)];
  let fnum = getRandomNumber(minRange, maxRange);
  let snum = getRandomNumber(minRange, maxRange);
  if (ope == "-") {
    fnum = Math.max(fnum, snum);
    snum = Math.min(fnum, snum);
  }
  if (ope == "/") {
    let multiplier = getRandomNumber(1, 9);
    fnum = snum * multiplier;
  }
  return [fnum, snum, ope];
}

function getTarget(fnum, snum, ope) {
  let target = null;

  if (ope == "+") {
    target = fnum + snum;
  } else if (ope == "-") {
    target = fnum - snum;
  } else if (ope == "*") {
    target = fnum * snum;
  } else {
    target = fnum / snum;
  }
  target = Math.round(target);
  return target;
}

inputAnswer.focus();

function updateScore(val) {
  score.innerText = val;
}

function moveToNextQuestion() { }

function checkAnswer(e, fnum, snum, ope, que, numOfQuestions){
  let target = getTarget(fnum, snum, ope);
  let userEntered = e.target.value;
  console.log(userEntered, target, que);
  if (userEntered == target) {
    points = points+ 1;
    updateScore(points);
    scoreCard.correct.push([{
      "question":que,
      "userEntered": userEntered,
      "target": target
    }]);
    return;
  }else{
    scoreCard.incorrect.push([{
      "question":que,
      "userEntered":userEntered,
      "target": target
    }])
  }
  inputAnswer.value = "";
}

function playGame() {
  if(numOfQuestions == 0){
    return;
  }
  let [fnum, snum, ope] = getValues(1, 30);
  firstNum.innerText = fnum;
  secondNum.innerText = snum;
  operator.innerText = ope;
  let question = `${fnum}${ope}${snum}`;
  inputAnswer.addEventListener("change", (e) => {
    checkAnswer(e, fnum, snum, ope, question, numOfQuestions);
  });
}


function resetGame() {
  points = 0;
  updateScore(points);
}

newGame.addEventListener("click", resetGame);


function startGame(e) {
  startGameEle.classList.add('hideStartBtn')
  inputAnswer.classList.add('showAnswerInput')
  inputAnswer.focus();
  if(gameOpted.type == "questions"){
    let numOfQuestions = gameOpted.count;
    // while(numOfQuestions){
    //   console.log(numOfQuestions);
    //   playGame(numOfQuestions);
    //   numOfQuestions--;
    // }
    playGame();
  }
}


startGameEle.addEventListener('click', startGame)





