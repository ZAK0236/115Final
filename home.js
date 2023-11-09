window.addEventListener('DOMContentLoaded', () => {
    var tiles = Array.from(document.querySelectorAll('.tile'));
    var playerDisplay = document.querySelector('.display-player');

    let grid = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;


    var winPositions = [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,]
    ];

    var isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }
    
        return true;
    };

    var updateBoard =  (index) => {
        board[index] = currentPlayer;
     }

    var changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    function isValidResult() {
        let win = false;
        for (let i = 0; i <= 7; i++) {
            var winCondition = winPositions[i];
            var a = grid[winCondition[0]];
            var b = grid[winCondition[1]];
            var c = grid[winCondition[2]];
            if (a === "" || b === "" || c ==="") {
                continue;
            }
            if (a === b && b === c) {
                win = true;
                break;
            }
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

      
  });

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