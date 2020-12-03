import { useState } from "react";
import "./style.css";

function App() {
  const [baseSize, setBaseSize] = useState(16);

  let conversionsBelowBase = [];
  for (let x = baseSize; x >= baseSize - 10; x--) {
    let conversion = x / baseSize;
    conversionsBelowBase.unshift(
      <div className="conversion">
        <div className="px">{x}px</div>
        <div className="rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  let conversionsAboveBase = [];
  for (let x = baseSize + 1; x <= baseSize + 10; x++) {
    let conversion = x / baseSize;
    conversionsAboveBase.push(
      <div className="conversion">
        <div className="px">{x}px</div>
        <div className="rem">
          {Math.round((conversion + Number.EPSILON) * 10000) / 10000}rem
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="base-size-container">
        <div className="base-counter-container">
          <button
            className="base-size-button"
            onClick={() => setBaseSize(baseSize - 1)}
          >
            <i className="fas fa-chevron-left fa-fw" />
          </button>
          <div className="base-size-number">
            {baseSize}
            <span>px</span>
          </div>
          <button
            className="base-size-button"
            onClick={() => setBaseSize(baseSize + 1)}
          >
            <i className="fas fa-chevron-right fa-fw" />
          </button>
        </div>
      </div>
      {conversionsBelowBase}
      {conversionsAboveBase}
    </div>
  );
}

export default App;
