export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { lines: lines[i], symbol: squares[a] };
    }
  }
  return null;
}


export function calcMoveLocation(currentCellInd) {
  let location = [];
  let board = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

  for (let row = 0; row < board.length; row += 1) {
    let col = board[row].findIndex(n => n === currentCellInd);
    if (col !== -1) {
      location = [row + 1, col + 1];
      break;
    }
  }

  return location;
}


function createBoard(rows, cols) {
	const board = [];
	const cellsNumber = rows * cols;
	let counter = 0;
	let line = [];

	while (counter < cellsNumber) {
		if (line.length < cols) {
			line.push(counter++);
		}
		
		if (line.length === cols) {
			board.push(line);
			line = [];
		}
	}

	return board;
}