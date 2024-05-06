export function calculateWinner(squares, rows, cols, cells) {
	const board = createBoard(rows, cols);
  const lines = getBoardLines(board, rows, cols);

  const winnerX = 'x'.repeat(cells);
  const winnerO = 'o'.repeat(cells);
  let symbol = '';

  for (let i = 0; i < lines.length; i++) {
    const lineStr = lines[i].map(ind => squares[ind]).join('');
    //console.log(lineStr, lines[i], squares);
    if (lineStr.includes(winnerX)) {
    	symbol = 'x';
    } else if (lineStr.includes(winnerO)) {
    	symbol = 'o';
    }

    if (symbol) {
    	return { lines: lines[i], symbol: symbol };
    }
  }
  return null;
}


export function calcMoveLocation(currentCellInd, rows, cols) {
  let location = [];
  let board = createBoard(rows, cols);

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


function getBoardLines(board, rows, cols) {
	const horizontal = [...board];

	const vertical = [];
	for (let c = 0; c < cols; c += 1) {
		const line = [];
		for (let r = 0; r < rows; r += 1) {
			line.push(board[r][c]);
		}
		vertical.push(line);
	}

	const diagonal = [];
	loop: for (let c = 0, ind = 0; c < cols; c += 1) {
		const line1 = [], line2 = [];
		for (let r = 0; r < rows; r += 1) {
			//if (board[r][r + ind] === undefined) continue loop;
			line1.push(board[r][r + ind]);
			line2.push([...board[r]].reverse()[r + ind]);
		}
		ind += 1;
		diagonal.push(line1, line2);
	}

	return [...horizontal, ...vertical, ...diagonal];
}