export default function Controls({ rows, cols, changeRows, changeCols }) {
	return (
		<div className='controls'>
			<p>Fill {Math.min(rows, cols)} neighboring cells to win</p>
			<div>
				<span>rows:</span>
				<input type="number" min="3" value={rows} onChange={changeRows} />
			</div>
			<div>
				<span>cols:</span>
				<input type="number" min="3" value={cols} onChange={changeCols} />
			</div>
		</div>
	);
}