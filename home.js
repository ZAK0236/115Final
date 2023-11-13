const board = document.querySelector(".Game");
const cells = document.querySelectorAll(".tile");
const player1win = document.querySelector("#player1wins");
const player2win = document.querySelector("#player2wins");
const tiesDisplay = document.querySelector("#ties");
const header = document.createElement("h2")

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

header.innerHTML = "Player X's Turn"
document.body.appendChild(header)

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
    let score = parseInt(player1win.textContent);
    player1win.textContent = score + 1;
  } else if (currentPlayer === "O") {
    let score = parseInt(player2win.textContent);
    player2win.textContent = score + 1;
  }
}


  function keepTies() {
    let score = parseInt(tiesDisplay.textContent);
    tiesDisplay.textContent = score + 1
  }
  
  function endGame(draw) {
    gameActive = false;
    if (draw) {
      keepTies();
    } else {
      keepScore();
    }
  }
