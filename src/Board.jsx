import Square from './Square.jsx';
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
  let status;
  if (winner) {
    status = 'Winner: ' + winner.symbol;
  } else {
    status = 'Next player: ' + (xIsNext ? 'x' : 'o');
  }

  if (!squares.includes(null) && !winner) status = 'Result: draw';

  return (
    <>
      <div className='status'>{status}</div>
      {createBoard(3, 3, squares, handleClick, winner?.lines)}
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
      cols.push(<Square key={c} value={squares[ind]} onSquareClick={() => handleClick(ind)} highlight={lines.includes(ind)}/>);
      counter += 1;
    }
    board.push(<div key={r} className='board-row'>{cols}</div>);
  }
  return board;
}