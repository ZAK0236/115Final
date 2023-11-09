const board = document.querySelector('.Game');
const cells = document.querySelectorAll('.tile');

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

