import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

// Step component
function Step() {
  // step variable
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* Buttons */}
      <button>-</button>
      <p>Step: {step}</p>
      <button>+</button>
    </div>
  );
}
export default App;
