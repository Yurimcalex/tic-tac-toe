import { useState } from 'react';
import './App.css';
import Board from './Board.jsx';


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [movesOrder, setMovesOrder] = useState('asc');
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
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
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        {move === currentMove && move !== 0 
          ? 'You are at move #' + move
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