import { useState } from "react";
import "./style.css";

function App() {
  const [rootSize, setRootSize] = useState(16);
  const [calculationsBelowRoot, setCalculationsBelowRoot] = useState(5);
  const [calculationsAboveRoot, setCalculationsAboveRoot] = useState(5);

  let conversionsBelowRoot = [];
  for (let x = rootSize; x >= rootSize - calculationsBelowRoot; x--) {
    let conversion = x / rootSize;
    conversionsBelowRoot.unshift(
      <div className="conversion" key={x}>
        <div className="px">{x}px</div>
        <div className="rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  let conversionsAboveRoot = [];
  for (let x = rootSize + 1; x <= rootSize + calculationsAboveRoot; x++) {
    let conversion = x / rootSize;
    conversionsAboveRoot.push(
      <div className="conversion" key={x}>
        <div className="px">{x}px</div>
        <div className="rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  return (
    <>
      <header>
        <div className="root-size-container">
          <div className="root-counter-container">
            <button
              className="root-size-button"
              onClick={() => setRootSize(rootSize - 1)}
            >
              <i className="fas fa-chevron-left fa-fw" />
            </button>
            <div className="root-size-number">
              {rootSize}
              <span className="units">px</span>
            </div>
            <button
              className="root-size-button"
              onClick={() => setRootSize(rootSize + 1)}
            >
              <i className="fas fa-chevron-right fa-fw" />
            </button>
          </div>
        </div>
      </header>
      <div className="container">
        <button
          className="add-conversions-button"
          onClick={() => {
            setCalculationsBelowRoot(calculationsBelowRoot + 5);
          }}
        >
          <i className="fas fa-chevron-up fa-fw" />
        </button>
        {conversionsBelowRoot}
        {conversionsAboveRoot}
        <button
          className="add-conversions-button"
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
