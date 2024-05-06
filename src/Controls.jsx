export default function Controls({ rows, cols, changeRows, changeCols }) {
	return (
		<div className='controls'>
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