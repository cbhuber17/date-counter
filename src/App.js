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

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => (s = s - 1))}>-</button>
        {`Step: ${step}`}
        <button onClick={() => setStep((s) => (s = s + 1))}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => (c = c - step))}>-</button>
        {`Count: ${count}`}
        <button onClick={() => setCount((c) => (c = c + step))}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count < 0
          ? `${Math.abs(count)} day(s) ago was `
          : `${count} day(s) from now is `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
