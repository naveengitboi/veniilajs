let pianoBoard = document.querySelector(".keyPadPiano");
const volumeKey = document.querySelector(".volumeControls input");
const showKeys = document.querySelector(".keysControls input");

let volume = 100;

function createDivElement(key) {
  let div = document.createElement("div");
  div.classList.add("key", key.color);
  div.textContent = key.key;
  return div;
}

volumeKey.addEventListener("change", (e) => {
  volume = e.target.value;
  volumeKey.title = volume;
});

function clearInnerText(element, isChecked ) {
  let counts = element.childElementCount;
  if(isChecked){
    element.classList.add('hideKeys');
  }else{
    element.classList.remove('hideKeys');
  }
  if (counts) {
    let currElementChilds = element.children;
    for (let currEle of currElementChilds) {
      clearInnerText(currEle, isChecked);
    }
  }}

showKeys.addEventListener("click", (e) => {
  let isChecked = e.target.checked;
  let children = pianoBoard.children;
    for (let child of children) {
      clearInnerText(child, isChecked);
    }
});

keys.forEach((item) => {
  let parent = createDivElement(item[0]);

  for (let i = 1; i < item.length; i++) {
    let child = createDivElement(item[i]);
    parent.appendChild(child);
  }
  pianoBoard.appendChild(parent);

});

function checkIfKeySame(element, key, byClick) {
  let counts = element.childElementCount;
  let text = element.firstChild.data;
  if (text == key.key) {
    element.classList.add("activeKey");
    setTimeout(() => {
      element.classList.remove("activeKey");
    }, 300);
  }
  if (counts) {
    let currElementChilds = element.children;
    for (let currEle of currElementChilds) {
      checkIfKeySame(currEle, key, false);
    }
  }
}

function addActiveClass(key) {
  let children = pianoBoard.children;
  for (let child of children) {
    checkIfKeySame(child, key, false);
  }
}

function playTune(key) {
  let audio = new Audio(key.tune);
  audio.play();
  audio.volume = volume / 100;
  addActiveClass(key);
}

function iterateThroughKeys(keyPressed) {
  const size = keys.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < keys[i].length; j++) {
      if (keyPressed == keys[i][j].key) {
        playTune(keys[i][j]);
      }
    }
  }
}
function playKeySound(event, byClick) {
  let keyPressed;
  if (!byClick) {
    keyPressed = event.key;
    iterateThroughKeys(keyPressed);
  }
  if (byClick) {
    let target = event.target;
    if (target.classList.contains("key")) {
      keyPressed = target.firstChild.data;
      iterateThroughKeys(keyPressed);
    }
  }
}

window.addEventListener("keydown", (e) => playKeySound(e, false));
window.addEventListener("click", (e) => playKeySound(e, true));
