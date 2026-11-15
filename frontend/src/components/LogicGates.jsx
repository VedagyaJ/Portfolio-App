import { useState } from "react";
import "./LogicGates.css"

const GATES = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  NOT: (a) => !a,
  NAND: (a, b) => !(a && b),
  NOR: (a, b) => !(a || b),
  XOR: (a, b) => a !== b,
};

const LogicGates = () => {
  const [gate, setGate] = useState("AND");
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  const findOutput = (x, y) => {
    return GATES[gate](x, y);
  };

  const output = findOutput(a, b);

  // Possible inputs
  const combos =
    gate === "NOT"
      ? [[false], [true]]
      : [
          [false, false],
          [false, true],
          [true, false],
          [true, true],
        ];

  return (
    <div className="logic-gates">
      <div className="logic-controls">
        {/* Change inputs */}
        <label>
          A: <button onClick={() => setA(!a)}>{a ? 1 : 0}</button>
        </label>

        {gate !== "NOT" && (
          <label>
            B: <button onClick={() => setB(!b)}>{b ? 1 : 0}</button>
          </label>
        )}

        {/* Select gate */}
        <select
          name="gate"
          value={gate}
          onChange={({ target }) => setGate(target.value)}
        >
          {Object.keys(GATES).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>

        <span className="logic-output">{output ? 1 : 0}</span>
      </div>

      <div className="logic-table-wrap">
        <table>
          <thead>
            <tr>
              <th>A</th>
              {gate !== "NOT" && <th>B</th>}
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {combos.map(([rowA, rowB], i) => {
              const isCurrent = rowA === a && (gate === "NOT" || rowB === b);

              return (
                <tr key={i} className={isCurrent ? "current" : ""}>
                  <td>{rowA ? 1 : 0}</td>
                  {gate !== "NOT" && <td>{rowB ? 1 : 0}</td>}
                  <td>{findOutput(rowA, rowB) ? 1 : 0}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default LogicGates;
