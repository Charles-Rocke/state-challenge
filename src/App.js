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

  // handle reset
  function handleReset() {
    setStep(1);
    setCount(0);
  }
  // handle slider step
  function handleStep(event) {
    console.log(event);
    setStep(Number(event.target.value));
  }

  // handle input count
  function handleCount(event) {
    setCount(Number(event.target.value));
  }
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
        {/* slider */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(event) => handleStep(event)}
        ></input>
        <span>{step}</span>
      </div>
      {/* count div */}
      <div>
        <button onClick={handleSubCount}>-</button>
        <input
          placeholder="Enter count"
          onChange={(event) => handleCount(event)}
          value={count}
        ></input>
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
      {/* reset button 
        display only after changes have been made*/}
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
export default App;
