function getFigureId(row, col) {
    var result = 0;
    if (row === 2) {
        return 1;
    }
    if (row === 7) {
        return 11;
    }
    if (row == 1) {
        switch (col) {
            case 'A': return 4;
            case 'B': return 2;
            case 'C': return 3;
            case 'D': return 5;
            case 'E': return 6;
            case 'F': return 3;
            case 'G': return 2;
            case 'H': return 4;
        }
    }
    if (row == 8) {
        switch (col) {
            case 'A': return 14;
            case 'B': return 12;
            case 'C': return 13;
            case 'D': return 15;
            case 'E': return 16;
            case 'F': return 13;
            case 'G': return 12;
            case 'H': return 14;
        }
    }

    return result;
}

function chessBoardInit(notEmpty = false) {
    var cols = ",A,B,C,D,E,F,G,H,".split(','),
    rows = ",1,2,3,4,5,6,7,8,".split(',').reverse(),
    chessBoard = document.createElement('table'),
    curRow,
    curCell;

    for (var row = 0; row <= 9; row++) {
        curRow = document.createElement('tr');
        for (var cell = 0; cell <= 9; cell++) {
            curCell = document.createElement('td');
            if ((row === 0 || row === 9) || (cell === 0 || cell === 9)) {
                curCell.innerText = rows[row] || cols[cell];
            } else {
                curCell.className = (row % 2 == cell % 2) ? 'white_b' : 'black_b';
                if (notEmpty === true) {
                    curCell.setAttribute('content', getFigureId(row, cols[cell]));
                }
            }
            curRow.appendChild(curCell);
        }
        chessBoard.appendChild(curRow);
    }
    console.log(chessBoard);

    return chessBoard;
}


var chessBoard = document.getElementById('chess_board'),
    chessBoardChar = document.getElementById('chess_board_char'),
    chessBoardImage = document.getElementById('chess_board_image');

    chessBoard.appendChild(chessBoardInit());
    chessBoardChar.appendChild(chessBoardInit(true));
    chessBoardImage.appendChild(chessBoardInit(true));