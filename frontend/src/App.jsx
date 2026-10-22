import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  const convertToBinary = (num) => {
    let binary = "";
    while (num > 0) {
      binary = num % 2 + binary;
      num = Math.floor(num / 2);
    }

    return binary || "0";
  }

  return (
    <>
      <div>
        <h1>Denary to Binary Converter</h1>
        <input
          type="text"
          placeholder="Enter a number"
          onChange={({ target }) => setNum(target.value)}
        ></input>
        <p>answer {convertToBinary(num)}</p>
      </div>
    </>
  );
}

export default App;
