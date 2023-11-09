
    const 

    const winningConditions = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // first column
        [1, 4, 7], // second column
        [2, 5, 8], // third column
        [0, 4, 8], // diagonal top left to bottom right
        [2, 4, 6], // diagonal top right to bottom left
    ];
    
        function checkForWin(board) {
            const winningConditions = [
                [0, 1, 2], // top row
                [3, 4, 5], // middle row
                [6, 7, 8], // bottom row
                [0, 3, 6], // first column
                [1, 4, 7], // second column
                [2, 5, 8], // third column
                [0, 4, 8], // diagonal top left to bottom right
                [2, 4, 6], // diagonal top right to bottom left
            ];

            for (let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return true;
                }
            }
            
            return false;
        }
    function checkForDraw(board) {
        return board.every((cell) => cell !== null);
    }

    function checkForGameOver(board) {
        return checkForWin(board) || checkForDraw(board);
    }

    
