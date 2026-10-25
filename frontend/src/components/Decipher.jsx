import { useState } from "react";
import words from "an-array-of-english-words";
import "./Decipher.css";

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

    // Return the attempt with the highest score
    return results[scores.indexOf(Math.max(...scores))];
  };

  return (
    <main className="decipher-shell">
      <section className="decipher-card" aria-labelledby="decipher-title">
        <p className="decipher-eyebrow">Message decoder</p>
        <h1 id="decipher-title">Caesar cipher solver</h1>
        <p className="decipher-description">
          Paste an encoded message and find the most likely plaintext.
        </p>

        <div className="decipher-field">
          <label htmlFor="cipher-input">Encoded message</label>
          <textarea
            id="cipher-input"
            value={inputText}
            onChange={({ target }) => setInputText(target.value)}
            placeholder="Type or paste your message here..."
            rows="5"
          />
        </div>

        <div className="decipher-result">
          <div className="decipher-result-heading">
            <span className="decipher-result-label">Decoded message</span>
            <span className="decipher-method">Automatic shift detection</span>
          </div>
          <output className="decipher-result-value" aria-live="polite">
            {inputText
              ? decipherText([...inputText])
              : "Your decoded message will appear here."}
          </output>
        </div>
      </section>
    </main>
  );
};

export default Decipher;
