import { useState } from "react";
import "./style.css";

function App() {
  const [rootSize, setRootSize] = useState(16);
  const [calculationsBelowRoot, setCalculationsBelowRoot] = useState(5);
  const [calculationsAboveRoot, setCalculationsAboveRoot] = useState(5);

  let conversionsBelowRoot = [];
  for (let x = rootSize; x >= rootSize - calculationsBelowRoot; x--) {
    let conversion =
      Math.round((x / rootSize + Number.EPSILON) * 10000) / 10000;
    conversionsBelowRoot.unshift(
      <div className="conversion" key={x}>
        <div className="conversion-px">{x}px</div>
        <div className="conversion-rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  let conversionsAboveRoot = [];
  for (let x = rootSize + 1; x <= rootSize + calculationsAboveRoot; x++) {
    let conversion =
      Math.round((x / rootSize + Number.EPSILON) * 10000) / 10000;
    conversionsAboveRoot.push(
      <div className="conversion" key={x}>
        <div className="conversion-px">{x}px</div>
        <div className="conversion-rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1 className="logo">
          <strong>rem</strong>arkable
        </h1>
        <p className="description">simple px to rem conversion</p>
        <div className="counter-container">
          <div className="counter">
            <button
              className="counter-button"
              onClick={() => setRootSize(rootSize - 1)}
            >
              <i className="fas fa-chevron-left fa-fw" />
            </button>
            <div className="counter-number">
              {rootSize}
              <span className="counter-units">px</span>
            </div>
            <button
              className="counter-button"
              onClick={() => setRootSize(rootSize + 1)}
            >
              <i className="fas fa-chevron-right fa-fw" />
            </button>
          </div>
        </div>
      </header>
      <div className="conversions-container">
        <button
          className="conversions-button"
          onClick={() => {
            setCalculationsBelowRoot(calculationsBelowRoot + 5);
          }}
        >
          <i className="fas fa-chevron-up fa-fw" />
        </button>
        {conversionsBelowRoot}
        {conversionsAboveRoot}
        <button
          className="conversions-button"
          onClick={() => {
            setCalculationsAboveRoot(calculationsAboveRoot + 5);
          }}
        >
          <i className="fas fa-chevron-down fa-fw" />
        </button>
      </div>
    </>
  );
}

export default App;
