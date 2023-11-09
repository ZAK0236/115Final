// Get the game board and cells
const board = document.querySelector('.Game');
const cells = document.querySelectorAll('.tile');

// Set up the game state
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// Define the winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Add event listeners to the cells
cells.forEach((cell, index) => {
  cell.setAttribute('data-index', index);
  cell.addEventListener('click', handleCellClick);
});

// Handle a cell click
function handleCellClick(event) {
  const cell = event.target;
  const index = parseInt(cell.getAttribute('data-index'));

  // Check if the cell is already filled or the game is over
  if (gameState[index] !== '' || !gameActive) {
    return;
  }

  // Update the game state
  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  // Check for a win or a draw
  const win = checkWin();
  const draw = checkDraw();

  if (win) {
    endGame(false);
  } else if (draw) {
    endGame(true);
  } else {
    // Switch to the other player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Check for a win
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      return true;
    }
  }
  return false;
}

// Check for a draw
function checkDraw() {
  return gameState.every(cell => cell !== '');
}

