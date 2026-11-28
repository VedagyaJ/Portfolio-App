import { useState } from "react";
import "./LogicGates.css";

const GATES = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  NOT: (a) => !a,
  NAND: (a, b) => !(a && b),
  NOR: (a, b) => !(a || b),
  XOR: (a, b) => a !== b,
};

const GateSelect = ({ value, onChange }) => (
  <select value={value} onChange={({ target }) => onChange(target.value)}>
    {Object.keys(GATES).map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ))}
  </select>
);

const bit = (v) => (v ? 1 : 0);

const findOutput = (operator, x, y) => {
  return GATES[operator](x, y);
};

const LogicGates = () => {
  const [components, setComponents] = useState([
    { id: 1, type: "INPUT", row: 2, col: 1, value: false },
    { id: 2, type: "AND", row: 3, col: 4 },
  ]);

  const cells = [];

  const [gate1, setGate] = useState("AND");
  const [gate2, setGate2] = useState("AND");
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);

  const output = findOutput(gate1, a, b);

  // Create grid
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 12; c++) {
      // Check if a component is in the cell
      const component = components.find(
        (comp) => comp.row === r && comp.col === c,
      );

      cells.push(
        <div key={`${r},${c}`} className={component ? "cell": "cell empty"}>
          {/* Add component if it exists */}
          {component && (
            <div className={`component ${component.type.toLocaleLowerCase()}`}>
              {component.type}
            </div>
          )}
        </div>,
      );
    }
  }

  // Possible inputs
  const combos =
    gate1 === "NOT"
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
          A: <button onClick={() => setA(!a)}>{bit(a)}</button>
        </label>

        {gate1 !== "NOT" && (
          <label>
            B: <button onClick={() => setB(!b)}>{bit(b)}</button>
          </label>
        )}

        {/* Select gate */}
        <GateSelect value={gate1} onChange={setGate} />

        <span className="logic-output">{bit(output)}</span>

        {/* Second gate */}
        {gate2 !== "NOT" && (
          <label>
            C: <button onClick={() => setC(!c)}>{bit(c)}</button>
          </label>
        )}

        <GateSelect value={gate2} onChange={setGate2} />

        <span className="logic-output">
          {bit(findOutput(gate2, output, c))}
        </span>
      </div>
      {/* Truth table */}
      <div className="logic-table-wrap">
        <table>
          <thead>
            <tr>
              <th>A</th>
              {gate1 !== "NOT" && <th>B</th>}
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {combos.map(([rowA, rowB], i) => {
              const isCurrent = rowA === a && (gate1 === "NOT" || rowB === b);

              return (
                <tr key={i} className={isCurrent ? "current" : ""}>
                  <td>{bit(rowA)}</td>
                  {gate1 !== "NOT" && <td>{bit(rowB)}</td>}
                  <td>{bit(findOutput(gate1, rowA, rowB))}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="circuit-grid">{cells}</div>
    </div>
  );
};
export default LogicGates;
