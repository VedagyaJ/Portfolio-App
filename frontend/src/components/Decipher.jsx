import { useState } from "react";

const Decipher = () => {
  const [inputText, setInputText] = useState("");

  const shiftLetters = (text) => {
    const results = [];

    for (let i = 0; i < 25; i++) {
      const shifted = text.map((char) => {
        const charCode = char.charCodeAt(0);

        // Shift uppercase letters
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + i + 1) % 26) + 65);
        }

        // Shift lowercase letters
        if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + i + 1) % 26) + 97);
        }

        // Other characters remain unchanged
        return char;
      });

      const attempt = shifted.join("");
      results.push(attempt);
    }
    console.log("Decipher attempts:", results);

    return results;
  };

  const decipherText = (text) => {
    const results = shiftLetters(text);
  };

  return (
    <div>
      <h1>Decipher Component</h1>
      <input
        type="text"
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        placeholder="Enter text to decipher"
      />
      answer {decipherText([...inputText])}
    </div>
  );
};

export default Decipher;
