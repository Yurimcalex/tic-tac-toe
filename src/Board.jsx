import Square from './Square.jsx';
import Status from './Status.jsx';
import { calculateWinner } from './utils.js';

export default function Board({ xIsNext, squares, onPlay, rows, cols }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares, rows, cols)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'x';
    } else {
      nextSquares[i] = 'o';
    }
  
    onPlay(nextSquares, i);
  }

  const winner = calculateWinner(squares, rows, cols);

  return (
    <>
      <Status xIsNext={xIsNext} winner={winner} squares={squares} />
      <div>{createBoard(rows, cols, squares, handleClick, winner)}</div>
    </>
  );
}


function createBoard(rowN, colN, squares, handleClick, winner) {
  const board = [];
  let counter = 0;
  for (let r = 0; r < rowN; r += 1) {
    let cols = [];
    for (let c = 0; c < colN; c += 1) {
      const ind = counter;
      let highlight = false;
      let shade = false;

      if (winner) {
        highlight = winner.lines.includes(ind) && squares[ind] === winner.symbol;
        shade = !highlight;
      }

      cols.push(
        <Square 
          key={c}
          value={squares[ind]}
          onSquareClick={() => handleClick(ind)}
          highlight={highlight}
          shade={shade} />
      );
      counter += 1;
    }
    board.push(<div key={r} className='board-row'>{cols}</div>);
  }
  return board;
}