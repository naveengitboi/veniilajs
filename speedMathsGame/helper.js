const gameOptionsEle = document.querySelectorAll('.gameOptions p');
const timer = document.querySelector('.timer');

let gameOpted = {
  "type":"time",
  "count":60
};
function makeSelection(e, ele)
{
  gameOptionsEle.forEach((item) => {
    if(item == ele){
      item.classList.add('selectedOption');
      gameOpted = {...item.dataset}
      updateTimer();
    }else{
      item.classList.remove('selectedOption');
    }
  })
}

gameOptionsEle.forEach((ele) => {
  ele.addEventListener('click', (event) => makeSelection(event, ele))
})

function updateTimer(){
  let timerText = null;
  if(gameOpted.type == 'time'){
    timerText = gameOpted.count + "sec";
  }else{
    timerText = gameOpted.count + "Q's";
  }
  timer.innerText = timerText;
}




