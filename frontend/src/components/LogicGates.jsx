import { useState } from "react";

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

  const output = GATES[gate](a, b);

  return (
    <>
      <div>
        <button onClick={() => setA(!a)}>{a ? 1 : 0}</button>
        {gate !== "NOT" && <button onClick={() => setB(!b)}>{b ? 1 : 0}</button>}

        <select
          name="gate"
          value={gate}
          onChange={({ target }) => setGate(target.value)}
        >
          {Object.keys(GATES).map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
        {output ? 1 : 0}
        
      </div>
    </>
  );
};
export default LogicGates;
