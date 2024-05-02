import { useState } from 'react';
import './App.css';
import Board from './Board.jsx';


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [movesOrder, setMovesOrder] = useState('asc');
  const [cellsHistory, setCellsHistory] = useState([[]]);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares, cellInd) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setCellsHistory([...cellsHistory.slice(0, currentMove + 1), calcMoveLocation(cellInd)]);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function toggleMoves() {
    if (movesOrder === 'asc') {
      setMovesOrder('desc');
    } else {
      setMovesOrder('asc');
    }
  }

  let moves = history.map((squares, move) => {
    let description;
    let location = cellsHistory[move];
    if (move > 0) {
      description = 'Go to move #' + move + ' - ' + location;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        {move === currentMove && move !== 0 
          ? 'You are at move #' + move + ' - ' + location
          : <button onClick={() => jumpTo(move)}>{description}</button>}
      </li>
    );
  });

  if (movesOrder === 'desc') moves = [...moves.reverse()];

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <MovesOrderToggler onToggle={toggleMoves} /> 
      </div>
      <div className='game-info'>     
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


function MovesOrderToggler({ onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>Sort moves</button>
    </div>
  );
}


function calcMoveLocation(currentCellInd) {
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