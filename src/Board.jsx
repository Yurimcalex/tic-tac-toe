import Square from './Square.jsx';

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
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'x' : 'o');
  }

  return (
    <>
      <div className='status'>{status}</div>
      {createBoard(3, 3, squares, handleClick)}
    </>
  );
}


function createBoard(rowN, colN, squares, handleClick) {
  const board = [];
  let counter = 0;
  for (let r = 0; r < rowN; r += 1) {
    let cols = [];
    for (let c = 0; c < colN; c += 1) {
      let ind = counter;
      cols.push(<Square key={c} value={squares[ind]} onSquareClick={() => handleClick(ind)} />);
      counter += 1;
    }
    board.push(<div key={r} className='board-row'>{cols}</div>);
  }
  return board;
}


function calculateWinner(squares) {
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
      return squares[a];
    }
  }
  return null;
}