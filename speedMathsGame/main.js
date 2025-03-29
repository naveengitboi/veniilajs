const score = document.querySelector(".score");
const timer = document.querySelector(".timer");
const firstNum = document.querySelector(".firstNumber");
const operator = document.querySelector(".operator");
const secondNum = document.querySelector(".secondNumber");
const inputAnswer = document.querySelector(".answer");

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
  let fnum = getRandomNumber(1, 20);
  let snum = getRandomNumber(1, 20);
  while ((ope == "/" || ope == "-") && fnum < snum) {
    snum = getRandomNumber(1, 20);
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
  target = Math.round(target, 2);

  return target;
}

inputAnswer.focus();

function updateScore(val) {
  score.innerText = val;
}

function moveToNextQuestion() { }

function checkAnswer(e) {
  let target = getTarget(fnum, snum, ope);
  let val = e.target.value;
  if (val == target) {
    moveToNextQuestion();
    updateScore(points++);
  }
}

function playGame() {
  let [fnum, snum, ope] = getValues(1, 20);
  firstNum.innerText = fnum;
  secondNum.innerText = snum;
  operator.innerText = ope;
  inputAnswer.addEventListener("change", checkAnswer);
}

let steps = 10;
while(steps > 0)
{
  playGame();

}

