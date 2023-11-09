const board = document.querySelector('.Game');
const cells = document.querySelectorAll('.tile');
const player1wins = document.querySelector('.player1wins');
const player2wins = document.querySelector('.player2wins');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

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

cells.forEach((cell, index) => {
    cell.setAttribute('data-index', index);
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;
    const index = parseInt(cell.getAttribute('data-index'));

    if (gameState[index] !== '' || !gameActive) {
        return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    const win = checkWin();
    const draw = checkDraw();

    if (win) {
        endGame(false);
    } else if (draw) {
        endGame(true);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
    var userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            isValidResult();
            changePlayer();
        }
    };
    
    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });
function myO() {
  document.body.style.color = "green";
}
function myX() {
  document.body.style.color = "blue";
}
function checkDraw() {
    return gameState.every(cell => cell !== '');
}
function endGame(draw) {
    if (draw) {
        document.querySelector('.Game').classList.add('draw');
    } else {
        document.querySelector('.Game').classList.add('winner');
    }
    gameActive = false;
}
function restartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.tile').forEach(cell => cell.textContent = '');
    document.querySelector('.Game').classList.remove('winner');
    document.querySelector('.Game').classList.remove('draw');
}
