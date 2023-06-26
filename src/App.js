import { useState } from "react";
import "./styles.css";

function App() {
  return <Step />;
}

// Step component
function Step() {
  // step variable
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 26 2023");
  date.setDate(date.getDate() + count);

  // subtract state value
  function handleSubStep() {
    setStep((s) => step - 1);
  }

  // add state value
  function handleAddStep() {
    setStep((s) => s + 1);
  }

  // subtract count
  function handleSubCount() {
    setCount((c) => c - step);
  }

  // add count
  function handleAddCount() {
    setCount((c) => c + step);
  }

  return (
    <div className="App">
      {/* When user clicks, step number - increase or decrease */}
      {/* step div */}
      <div>
        <button onClick={handleSubStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleAddStep}>+</button>
      </div>
      {/* count div */}
      <div>
        <button onClick={handleSubCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleAddCount}>+</button>
      </div>
      {/* result div
          if today : 'Today is
          if greater : Count days from today is Date
          if less : Count days ago was Date
      */}
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
export default App;
