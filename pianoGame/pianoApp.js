let pianoBoard = document.querySelector(".keyPadPiano");
const volumeKey = document.querySelector(".volumeControls input");
let volume = 100;
function createDivElement(key) {
  let div = document.createElement("div");
  div.classList.add("key", key.color);
  div.textContent = key.key;
  return div;
}

volumeKey.addEventListener('change', (e) => {
  volume = e.target.value;
  volumeKey.title = volume
})

keys.forEach((item) => {
  let parent = createDivElement(item[0]);

  for (let i = 1; i < item.length; i++) {
    let child = createDivElement(item[i]);
    parent.appendChild(child);
  }

  pianoBoard.appendChild(parent);
});

function checkIfKeySame(element, key){
  let counts = element.childElementCount;
  let text = element.firstChild.data;
  if(text == key.key){
    element.classList.add("activeKey");
    setTimeout(() => {
      element.classList.remove("activeKey");
    },300)
  }
  if(counts){
    let currElementChilds = element.children;
    for(let currEle of currElementChilds){
      checkIfKeySame(currEle, key);
    }
  }
}

function addActiveClass(key) {
  let children = pianoBoard.children;
  for(let child of children){
    checkIfKeySame(child, key);
  }
}

function playTune(key) {
  let audio = new Audio(key.tune);
  audio.play();
  audio.volume = volume/100;
  addActiveClass(key);
}

function playKeySound(event) {
  const size = keys.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < keys[i].length; j++) {
      if (event.key == keys[i][j].key) {
        playTune(keys[i][j]);
      }
    }
  }
}

window.addEventListener("keydown", playKeySound);
