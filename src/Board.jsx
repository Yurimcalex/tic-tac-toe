import Square from './Square.jsx';
import Status from './Status.jsx';
import { calculateWinner } from './utils.js';

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
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

  const winner = calculateWinner(squares);

  return (
    <>
      <Status xIsNext={xIsNext} winner={winner} squares={squares} />
      <div>{createBoard(3, 3, squares, handleClick, winner?.lines)}</div>
    </>
  );
}


function createBoard(rowN, colN, squares, handleClick, lines=[]) {
  const board = [];
  let counter = 0;
  for (let r = 0; r < rowN; r += 1) {
    let cols = [];
    for (let c = 0; c < colN; c += 1) {
      let ind = counter;
      cols.push(
        <Square 
          key={c}
          value={squares[ind]}
          onSquareClick={() => handleClick(ind)}
          highlight={lines.includes(ind)}
          shade={lines.length && !lines.includes(ind)} />
      );
      counter += 1;
    }
    board.push(<div key={r} className='board-row'>{cols}</div>);
  }
  return board;
}