export default function HistoryOrder({ onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>Sort moves</button>
    </div>
  );
}