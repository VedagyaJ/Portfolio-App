import { useState } from "react";
import words from "an-array-of-english-words";

const dictionary = new Set(words);

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

    return results;
  };

  const decipherText = (text) => {
    const results = shiftLetters(text);

    // Array of scores of each attempt
    const scores = results.map((attempt) => {
      // Array of words in attempt
      const wordsInAttempt = attempt
        .split(/\s+/)
        .map((word) => word.toLowerCase());

      // Count how many words are in the dictionary
      const score = wordsInAttempt.reduce((count, word) => {
        return dictionary.has(word) ? count + 1 : count;
      }, 0);

      return score;
    });

    return results[scores.indexOf(Math.max(...scores))];
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
