import { useState } from "react";
const Increment = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 id="display">{counter}</h1>
      <div className="button-class">
        <button
          className="btn btn1 "
          id="button1"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn2 "
          id="button2"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Increment;
