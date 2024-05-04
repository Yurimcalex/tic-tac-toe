export default function History({ history, cellsHistory, currentMove, movesOrder, jumpTo }) {
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
		<ol>
			{moves}
		</ol>
	);
}