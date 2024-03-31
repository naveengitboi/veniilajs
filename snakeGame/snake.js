const border = document.querySelector('.snakeInnerBorder');
const snakeInnerBorder = document.querySelector('.snakeInnerBorder')
const snakeHead = document.querySelector('.snakeHead')
const gridSize = 20
let direction = 'right'
let snakeLen = [
    {
        x: 200,
        y: 200
    },
    {
        x: 60,
        y: 60
    }
]
const snakeFoodPosition = generateRandom()
//random position
function generateRandom() {
    const foodPosition = Math.floor(Math.random() * gridSize)
    console.log(foodPosition)
    return foodPosition;
}

//move snakehead
function moveSnake() {
    switch (keyButton){
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

    const moveSide = snakeHead.style

    switch (direction){
        case 'right':
            moveSide.left = snake
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

function createSnakePart() {
    const part = document.createElement('div');
    part.className = "snakeHead"
    part.style.top = snakeLen[0].y + 'px'
    part.style.left = snakeLen[0].x + 'px'
    snakeInnerBorder.appendChild(part)

}

function gameStart() {
    const interval = setInterval(() => {
        window.addEventListener('keydown', () => {
            moveSnake();
        })
    }, 100)
    clearInterval(interval)
}


window.addEventListener('keydown', (e) => {
    if (e.key == 'Space' || e.key == ' ') {
        gameStart()
    }
})

//game controls
