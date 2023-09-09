const gameBoard = document.getElementById('game-board');
const tileSize = 20;
const boardSize = 20;
const initialSnakeSpeed = 200;
let snakeSpeed = initialSnakeSpeed;
let snake = [{ x: 10, y: 10 }];
let food = getRandomFood();
let direction = { x: 0, y: 0 };
let gameLoop;

function startGame() {
  gameLoop = setInterval(update, snakeSpeed);
}

function drawGame() {
  gameBoard.innerHTML = '';
  drawSnake();
  drawFood();
}

function drawSnake() {
  snake.forEach((dot) => {
    const snakeDot = createDot(dot.x, dot.y, 'snake-dot');
    gameBoard.appendChild(snakeDot);
  });
}

function drawFood() {
  const foodDot = createDot(food.x, food.y, 'food-dot');
  gameBoard.appendChild(foodDot);
}

function createDot(x, y, className) {
  const dot = document.createElement('div');
  dot.style.left = `${x * tileSize}px`;
  dot.style.top = `${y * tileSize}px`;
  dot.classList.add(className);
  return dot;
}

function getRandomFood() {
  return {
    x: Math.floor(Math.random() * boardSize),
    y: Math.floor(Math.random() * boardSize),
  };
}

function moveSnake() {
  const head = { x: snake[0].x, y: snake[0].y };
  head.x += direction.x;
  head.y += direction.y;
  snake.unshift(head);

  if (isEatingFood()) {
    food = getRandomFood();
    snakeSpeed *= 0.9; // Increase snake speed when eating food
  } else {
    snake.pop();
  }

  drawGame();
}

function isEatingFood() {
  return snake[0].x === food.x && snake[0].y === food.y;
}

function handleArrowKey(event) {
  const key = event.key;
  switch (key) {
    case 'ArrowUp':
      direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      direction = { x: 1, y: 0 };
      break;
    default:
      break;
  }
}

function gameOver() {
  clearInterval(gameLoop);
  alert('Game Over!');
}

function update() {
  moveSnake();
  if (isCollision()) {
    gameOver();
  }
  drawGame();
}

function isCollision() {
  const head = snake[0];
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= boardSize ||
    head.y >= boardSize ||
    snake.slice(1).some((dot) => dot.x === head.x && dot.y === head.y)
  );
}

document.addEventListener('keydown', handleArrowKey);
startGame();
