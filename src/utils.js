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