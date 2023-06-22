import "./index.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/* <button onClick={() => setStep((s) => (s = s - 1))}>-</button> */}
        {`Step: ${step}`}
        {/* <button onClick={() => setStep((s) => (s = s + 1))}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => (c = c - step))}>-</button>
        {/* {`Count: ${count}`} */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => (c = c + step))}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count < 0
            ? `${Math.abs(count)} day(s) ago was `
            : `${count} day(s) from now is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
