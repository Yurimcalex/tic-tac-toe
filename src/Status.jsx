import { calculateWinner } from './utils.js';

export default function Status({ xIsNext, winner, squares }) {
	let status;
	
	if (winner) {
	  status = 'Winner: ' + winner.symbol;
	} else {
	  status = 'Next player: ' + (xIsNext ? 'x' : 'o');
	}

	if (!squares.includes(null) && !winner) status = 'Result: draw';
	
	return (
		<div className='status'>{status}</div>
	);
}