import { useState } from 'react';
import Board from './Board.jsx';
import History from './History.jsx';
import HistoryOrder from './HistoryOrder.jsx';
import { calcMoveLocation } from './utils.js';
import './App.css';


export default function Game() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [history, setHistory] = useState([Array(rows * cols).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [movesOrder, setMovesOrder] = useState('asc');
  const [cellsHistory, setCellsHistory] = useState([[]]);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares, cellInd) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setCellsHistory([...cellsHistory.slice(0, currentMove + 1), calcMoveLocation(cellInd, rows, cols)]);
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

  return (
    <div className='game'>
      <div className='game-board'>
        <Board 
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          rows={rows}
          cols={cols}
        />
      </div>
      <div className='game-info'>     
        <History 
          history={history}
          cellsHistory={cellsHistory}
          currentMove={currentMove}
          movesOrder={movesOrder}
          jumpTo={jumpTo}
        />
        <HistoryOrder onToggle={toggleMoves} />
      </div>
    </div>
  );
}