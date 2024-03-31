const border = document.querySelector('.snakeInnerBorder');
const snakeInnerBorder = document.querySelector('.snakeInnerBorder')
const snakeHead = document.querySelector('.snakeHead')
const instructionText = document.querySelector('.instructions')
const gridSize = 20
let direction = 'right'
let gameInterval;
let gameStarted= false;
let snakeLen = [
    {
        x: 10,
        y: 10
    }
]
let sfPosition;
//random position
function generateFood() {
    const x = Math.floor(Math.random() * gridSize)
    const y = Math.floor(Math.random() * gridSize)
    return { x, y }
}

function draw() {
    snakeInnerBorder.innerHTML = ''
    drawSnake();
    drawSnakeFood()
}

function drawSnake() {
    snakeLen.forEach((segment) => {
        const snakePart = createPart('div', 'snakeHead')

        setPosition(snakePart, segment)
        snakeInnerBorder.appendChild(snakePart)
    })
}

function drawSnakeFood() {
    const foodEle = createPart('div', 'snakeFood')
    sfPosition = generateFood()
    setPosition(foodEle, sfPosition)
    snakeInnerBorder.appendChild(foodEle)

}

function createPart(ele, classVal) {
    const part = document.createElement(ele);
    part.className = classVal
    return part;
}
function setPosition(ele, position) {
    ele.style.gridColumn = position.y
    ele.style.gridRow = position.x
}

//move snakehead
function moveSnake() {
    const head = { ...snakeHead[0] }
    switch (direction) {
        case 'right':
            head.x++;
            break
        case 'left':
            head.x--;
            break
        case 'up':
            head.y--
            break
        case 'down':
            head.y++
            break
    }

    snakeLen.unshift(head)

    if (head.x == sfPosition.x && head.y == sfPosition.y) {
        food = generateFood();
        clearInterval();
        gameInterval = setInterval(() => {
            moveSnake();
            draw()
        },100)
    } else {
        snakeLen.pop()
    }

}

function startGame(){
    gameStarted = true
    instructionText.style.display = 'none';
    clearInterval(gameInterval)
    gameInterval = setInterval(() => {
        moveSnake();
        draw()
    })
}
const handleKeyPress = (e) => {
    if(e.code == 'Space' || e.key == ' '){
        startGame()
    }
    else{
        switch (e.key) {
            case 'ArrowUp':
                direction = 'up'
                break
            case 'ArrowDown':
                direction = 'down'
                break
            case 'ArrowLeft':
                direction = 'left'
                break
            case 'ArrowRight':
                direction = 'right'
                break
        }

    }
}

window.addEventListener('keydown', handleKeyPress)