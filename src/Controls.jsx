export default function Controls({ rows, cols, cells, changeRows, changeCols, changeCells }) {
	return (
		<div className='controls'>
			<p>Fill <strong>{cells}</strong> neighboring cells to win</p>
			<div>
				<span>cells: </span>
				<input type="number" min="3" max={Math.min(rows, cols)} value={cells} onChange={changeCells} />
			</div>
			<div>
				<span>rows: </span>
				<input type="number" min="3" value={rows} onChange={changeRows} />
			</div>
			<div>
				<span>cols: </span>
				<input type="number" min="3" value={cols} onChange={changeCols} />
			</div>
		</div>
	);
}