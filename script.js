// COMMIT: Initialize game variables and UI references
const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
const width = 8;
let squares = [];
const candyColors = [
  'url(images/confused.png)',
  'url(images/emoji.png)',
  'url(images/happy.png)',
  'url(images/sad.png)',
  'url(images/smile.png)',
  'url(images/smile11.png)',
];

let score = 0;
let timeLeft = 60;
let timerInterval;
let logicInterval;
let touchStartId = null;

// UI References
const timerDisplay = document.getElementById('timer');
const restartButton = document.getElementById('restart-button');
const startButton = document.getElementById('start-button');

restartButton.style.display = 'none';

startButton.addEventListener('click', startGame);

// COMMIT: Start the Game
function startGame() {
  startButton.style.display = 'none';
  restartButton.style.display = 'none';
  score = 0;
  timeLeft = 60;
  scoreDisplay.innerText = 0;
  timerDisplay.innerText = 60;
  grid.innerHTML = "";
  squares.length = 0;

  createBoard();

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      clearInterval(logicInterval);

      const message = `🎉 Well done! Your final score is ${score}. Want to play again or exit?`;
      document.getElementById("finalScoreMessage").innerText = message;
      const modal = new bootstrap.Modal(document.getElementById('gameOverModal'));
      modal.show();
    }
  }, 1000);

  logicInterval = setInterval(() => {
    moveDown();
    checkRowForThree();
    checkColumnForThree();
  }, 100);
}

// COMMIT: Create Grid and Attach Events
function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    square.setAttribute('draggable', true);
    square.setAttribute('id', i);
    let randomColor = Math.floor(Math.random() * candyColors.length);
    square.style.backgroundImage = candyColors[randomColor];
    grid.appendChild(square);
    squares.push(square);
  }

  // 🖱️ Desktop Events
  squares.forEach(square => square.addEventListener('dragstart', dragStart));
  squares.forEach(square => square.addEventListener('dragend', dragEnd));
  squares.forEach(square => square.addEventListener('dragover', e => e.preventDefault()));
  squares.forEach(square => square.addEventListener('dragenter', e => e.preventDefault()));
  squares.forEach(square => square.addEventListener('drop', dragDrop));

  // 📱 Mobile Touch Events
  squares.forEach(square => square.addEventListener('touchstart', handleTouchStart));
  squares.forEach(square => square.addEventListener('touchend', handleTouchEnd));
}

// COMMIT: Drag and Drop Logic
let colorBeingDragged, colorBeingReplaced, squareIdBeingDragged, squareIdBeingReplaced;

function dragStart() {
  colorBeingDragged = this.style.backgroundImage;
  squareIdBeingDragged = parseInt(this.id);
}

function dragDrop() {
  colorBeingReplaced = this.style.backgroundImage;
  squareIdBeingReplaced = parseInt(this.id);
  squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced;
  squares[squareIdBeingReplaced].style.backgroundImage = colorBeingDragged;
}

function dragEnd() {
  let validMoves = [
    squareIdBeingDragged - 1,
    squareIdBeingDragged - width,
    squareIdBeingDragged + 1,
    squareIdBeingDragged + width
  ];
  let validMove = validMoves.includes(squareIdBeingReplaced);

  if (squareIdBeingReplaced && validMove) {
    squareIdBeingReplaced = null;
  } else {
    squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged;
    squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced;
  }
}

// COMMIT: Touch Interaction for Mobile Devices
function handleTouchStart(e) {
  touchStartId = parseInt(this.id);
}

function handleTouchEnd(e) {
  const touchEndId = parseInt(this.id);
  if (touchStartId !== null && touchEndId !== touchStartId) {
    const isNeighbor =
      touchEndId === touchStartId - 1 ||
      touchEndId === touchStartId + 1 ||
      touchEndId === touchStartId - width ||
      touchEndId === touchStartId + width;

    if (isNeighbor) {
      const color1 = squares[touchStartId].style.backgroundImage;
      const color2 = squares[touchEndId].style.backgroundImage;
      squares[touchStartId].style.backgroundImage = color2;
      squares[touchEndId].style.backgroundImage = color1;

      // بلافاصله منطق بازی را اجرا کن
      setTimeout(() => {
        moveDown();
        checkRowForThree();
        checkColumnForThree();
      }, 100);
    }
  }
  touchStartId = null;
}



// COMMIT: Game Logic Functions
function checkRowForThree() {
  for (let i = 0; i < 62; i++) {
    let rowOfThree = [i, i + 1, i + 2];
    let decidedColor = squares[i].style.backgroundImage;
    const isBlank = decidedColor === '';
    if (rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
      score += 3;
      scoreDisplay.innerHTML = score;
      rowOfThree.forEach(index => squares[index].style.backgroundImage = '');
    }
  }
}

function checkColumnForThree() {
  for (let i = 0; i < 47; i++) {
    let columnOfThree = [i, i + width, i + width * 2];
    let decidedColor = squares[i].style.backgroundImage;
    const isBlank = decidedColor === '';
    if (columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
      score += 3;
      scoreDisplay.innerHTML = score;
      columnOfThree.forEach(index => squares[index].style.backgroundImage = '');
    }
  }
}

function moveDown() {
  for (let i = 0; i < 56; i++) {
    if (squares[i + width].style.backgroundImage === '') {
      squares[i + width].style.backgroundImage = squares[i].style.backgroundImage;
      squares[i].style.backgroundImage = '';
    }
  }

  for (let i = 0; i < 8; i++) {
    if (squares[i].style.backgroundImage === '') {
      let randomColor = Math.floor(Math.random() * candyColors.length);
      squares[i].style.backgroundImage = candyColors[randomColor];
    }
  }
}

// COMMIT: Display Player Name
const playerName = sessionStorage.getItem('playerName');
if (playerName) {
  const nameDisplay = document.getElementById('player-name-display');
  if (nameDisplay) {
    nameDisplay.textContent = `🎉 Player: ${playerName}`;
  }
}

// COMMIT: Restart Button
restartButton.addEventListener('click', () => location.reload());

// COMMIT: Auto-start Game (optional)
if (sessionStorage.getItem('startImmediately') === 'true') {
  sessionStorage.removeItem('startImmediately');
  window.addEventListener('load', startGame);
}

// COMMIT: Restart Game Function
function restartGame() {
  const modalElement = document.getElementById('gameOverModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) modalInstance.hide();

  clearInterval(timerInterval);
  clearInterval(logicInterval);
  score = 0;
  timeLeft = 60;
  scoreDisplay.innerText = 0;
  timerDisplay.innerText = 60;
  grid.innerHTML = "";
  squares.length = 0;

  const name = sessionStorage.getItem("playerName");
  if (name) {
    document.getElementById("player-name-display").innerText = `🎉 Player: ${name}`;
  }

  createBoard();

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      clearInterval(logicInterval);
      const message = `🎉 Well done! Your final score is ${score}. Want to play again or exit?`;
      document.getElementById("finalScoreMessage").innerText = message;
      const modal = new bootstrap.Modal(document.getElementById('gameOverModal'));
      modal.show();
    }
  }, 1000);

  logicInterval = setInterval(() => {
    moveDown();
    checkRowForThree();
    checkColumnForThree();
  }, 100);
}

// COMMIT: Return to Welcome Screen
function showWelcome() {
  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('welcomeScreen').style.display = 'block';
  clearInterval(timerInterval);
  clearInterval(logicInterval);
  grid.innerHTML = "";
  squares = [];
  sessionStorage.clear();
  score = 0;
  timeLeft = 60;
  scoreDisplay.innerText = 0;
  timerDisplay.innerText = 60;
}
