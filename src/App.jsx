import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  /*   const [btnPlus, setBtnPlus] = useState(true);
   */
  return (
    <>
      <div className="header">Mon header</div>
      <div className="counterAndBtn">
        {counter < 10 ? (
          <button
            className="btnPlus"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        ) : null}
        <p>{counter}</p>
        {counter > 0 ? (
          <button
            className="btnMoins"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        ) : null}
      </div>
      <div className="resetBtn">
        <button
          className="resetBtn"
          onClick={() => {
            setCounter(0);
          }}
        >
          reset
        </button>
      </div>
      <footer>made by Thomas</footer>
    </>
  );
}

export default App;
