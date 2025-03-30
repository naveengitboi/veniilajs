const score = document.querySelector(".score");
const firstNum = document.querySelector(".firstNumber");
const operator = document.querySelector(".operator");
const secondNum = document.querySelector(".secondNumber");
const inputAnswer = document.querySelector(".answer");
const newGame = document.querySelector(".newGame");
const startGameEle = document.querySelector('.startBtn')

let operatorSymbol = ["*", "+", "-", "/"];
let points = 0;

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

function checkAnswer(e, fnum, snum, ope) {
  console.log(fnum, snum, ope);
  let target = getTarget(fnum, snum, ope);
  console.log(target);
  let val = e.target.value;
  if (val == target) {
    updateScore(++points);
    inputAnswer.value = "";
    playGame();
  }
}

function playGame() {
  let [fnum, snum, ope] = getValues(1, 30);
  firstNum.innerText = fnum;
  secondNum.innerText = snum;
  operator.innerText = ope;
  inputAnswer.addEventListener("change", (e) => {
    checkAnswer(e, fnum, snum, ope);
  });
}

let steps = 10;
playGame();

function resetGame() {
  points = 0;
  updateScore(points);
}

newGame.addEventListener("click", resetGame);

function startGame(e) {
  startGameEle.classList.add('hideStartBtn')
  inputAnswer.classList.add('showAnswerInput')
  inputAnswer.focus();
}


startGameEle.addEventListener('click', startGame)


