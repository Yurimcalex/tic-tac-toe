export default function Square({ value, onSquareClick, highlight, shade }) {
	let className = 'square';
	if (highlight) className += ' highlight';
	if (shade) className += ' shade';
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  ); 
}