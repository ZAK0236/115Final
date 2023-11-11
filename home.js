const board = document.querySelector(".Game");
const cells = document.querySelectorAll(".tile");
const player1wins = document.querySelector("#player1wins");
const player2wins = document.querySelector("#player2wins");
const tiesDisplay = document.querySelector("#ties");

let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell, index) => {
  cell.setAttribute("data-index", index);
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  const index = parseInt(cell.getAttribute("data-index"));

  if (gameState[index] !== "" || !gameActive) {
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
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameState[a] !== "" &&
      gameState[a] === gameState[b] &&
      gameState[b] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return gameState.every((cell) => cell !== "");
}

function resetGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  cells.forEach((cell) => (cell.textContent = ""));
}
console.log(player1wins, player2wins, tiesDisplay);

function keepScore() {
    if (currentPlayer === "X") {
      player1wins++;
      player1wins.textContent = player1wins;
    } else if (currentPlayer === "O") {
      player2wins++;
      player2wins.textContent = player2wins;
    } else {
      ties++;
      tiesDisplay.textContent = ties;
    }
  }


  function keepTies() {
    ties++;
    tiesDisplay.textContent = ties;
  }
  function endGame(draw) {
    gameActive = false;
    if (draw) {
      keepTies();
    } else {
      keepScore();
    }
  }
  
// function clearBoard() {
//     cells.forEach(cell => {
//         cell.textContent = '';

// window.addEventListener('DOMContentLoaded', () => {
//     var tiles = Array.from(document.querySelectorAll('.tile'));
//     var playerDisplay = document.querySelector('.display-player');

//     let grid = ['', '', '', '', '', '', '', '', ''];
//     let currentPlayer = 'X';
//     let isGameActive = true;

//     var winPositions = [
//         [0, 1, 2,],
//         [3, 4, 5,],
//         [6, 7, 8,],
//         [0, 3, 6,],
//         [1, 4, 7,],
//         [2, 5, 8,],
//         [0, 4, 8,],
//         [2, 4, 6,]
//     ];

//     var isValidAction = (tile) => {
//         if (tile.innerText === 'X' || tile.innerText === 'O'){
//             return false;
//         }

//         return true;
//     };

//     var updateBoard =  (index) => {
//         board[index] = currentPlayer;
//      }

//     var changePlayer = () => {
//         playerDisplay.classList.remove(`player${currentPlayer}`);
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         playerDisplay.innerText = currentPlayer;
//         playerDisplay.classList.add(`player${currentPlayer}`);
//     }

//     function isValidResult() {
//         let win = false;
//         for (let i = 0; i <= 7; i++) {
//             var winCondition = winPositions[i];
//             var a = grid[winCondition[0]];
//             var b = grid[winCondition[1]];
//             var c = grid[winCondition[2]];
//             if (a === "" || b === "" || c ==="") {
//                 continue;
//             }
//             if (a === b && b === c) {
//                 win = true;
//                 break;
//             }
//         }

//     }

//     var userAction = (tile, index) => {
//         if (isValidAction(tile) && isGameActive) {
//             tile.innerText = currentPlayer;
//             tile.classList.add(`player${currentPlayer}`);
//             updateBoard(index);
//             isValidResult();
//             changePlayer();
//         }
//     };

//     tiles.forEach( (tile, index) => {
//         tile.addEventListener('click', () => userAction(tile, index));

//     });
// }
// window.addEventListener('DOMContentLoaded', () => {
//     var tiles = Array.from(document.querySelectorAll('.tile'));
//     var playerDisplay = document.querySelector('.display-player');

//     let grid = ['', '', '', '', '', '', '', '', ''];
//     let currentPlayer = 'X';
//     let isGameActive = true;

//     var winPositions = [
//         [0, 1, 2,],
//         [3, 4, 5,],
//         [6, 7, 8,],
//         [0, 3, 6,],
//         [1, 4, 7,],
//         [2, 5, 8,],
//         [0, 4, 8,],
//         [2, 4, 6,]
//     ];

//     var isValidAction = (tile) => {
//         if (tile.innerText === 'X' || tile.innerText === 'O'){
//             return false;
//         }

//         return true;
//     };

//     var updateBoard =  (index) => {
//         board[index] = currentPlayer;
//      }

//     var changePlayer = () => {
//         playerDisplay.classList.remove(`player${currentPlayer}`);
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         playerDisplay.innerText = currentPlayer;
//         playerDisplay.classList.add(`player${currentPlayer}`);
//     }

//     function isValidResult() {
//         let win = false;
//         for (let i = 0; i <= 7; i++) {
//             var winCondition = winPositions[i];
//             var a = grid[winCondition[0]];
//             var b = grid[winCondition[1]];
//             var c = grid[winCondition[2]];
//             if (a === "" || b === "" || c ==="") {
//                 continue;
//             }
//             if (a === b && b === c) {
//                 win = true;
//                 break;
//             }
//         }

//     }

//     var userAction = (tile, index) => {
//         if (isValidAction(tile) && isGameActive) {
//             tile.innerText = currentPlayer;
//             tile.classList.add(`player${currentPlayer}`);
//             updateBoard(index);
//             isValidResult();
//             changePlayer();
//         }
//     };

//     tiles.forEach( (tile, index) => {
//         tile.addEventListener('click', () => userAction(tile, index));
//     });
