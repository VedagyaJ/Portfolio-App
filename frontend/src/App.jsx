import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [format, setFormat] = useState("binary");

  const convertToBinary = (num) => {
    // Find the highest power of 2 less than or equal to the number
    let powerOfTwo = 1;
    let maxPower = 0;
    while (powerOfTwo < num) {
      powerOfTwo *= 2;
      maxPower++;
    }

    // Create a binary string with leading zeros with same length as the highest power of 2
    let binary = "".padStart(maxPower + 1, "0");

    // Replace 0 with 1 in the binary string for each power of 2 that is less than or equal to the number
    for (let i = maxPower; i >= 0; i--) {
      if (num >= Math.pow(2, i)) {
        binary =
          binary.substring(0, maxPower - i) +
          "1" +
          binary.substring(maxPower - i + 1);
        num -= Math.pow(2, i);
      }
    }

    return binary.replace(/^0+/, "") || "0";
  };

  const convertToHex = (num) => {
    // Find the highest power of 16 less than or equal to the number
    const hexChars = "0123456789ABCDEF";
    let powerOfSixteen = 1;
    let maxPower = 0;
    while (powerOfSixteen < num) {
      powerOfSixteen *= 16;
      maxPower++;
    }

    let hex = "".padStart(maxPower + 1, "0");

    // Replace 0 with the character based on power of 16
    for (let i = maxPower; i >= 0; i--) {
      if (num >= Math.pow(16, i)) {
        const digit = Math.floor(num / Math.pow(16, i));
        hex =
          hex.substring(0, maxPower - i) +
          hexChars[digit] +
          hex.substring(maxPower - i + 1);
        num -= digit * Math.pow(16, i);
      }
    }

    return hex.replace(/^0+/, "") || "0";
  };

  const result = format === "binary" ? convertToBinary(num) : convertToHex(num);

  return (
    <>
      <div>
        <h1>Number Converter</h1>
        <input
          type="text"
          placeholder="Enter a number"
          onChange={({ target }) => setNum(target.value)}
        />
        <p>answer {result}</p>
        <div>
          <label>
            <input
              type="radio"
              name="number-format"
              value="binary"
              checked={format === "binary"}
              onChange={({ target }) => setFormat(target.value)}
            />{" "}
            Binary
          </label>
          <label>
            <input
              type="radio"
              name="number-format"
              value="hex"
              checked={format === "hex"}
              onChange={({ target }) => setFormat(target.value)}
            />{" "}
            Hexadecimal
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
