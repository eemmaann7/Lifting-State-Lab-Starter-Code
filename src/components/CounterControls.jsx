import "./counter.css";

function CounterControls({ count, setCount }) {
  return (
    <div className="counter-controls">
      <button
        className="btn secondary"
        onClick={() => setCount(count - 1)}
      >
        −
      </button>

      <button
        className="btn primary"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default CounterControls;