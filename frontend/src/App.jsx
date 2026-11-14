import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Converter from "./components/Converter";
import Decipher from "./components/Decipher";
import Pathfinder from "./components/Pathfinder";
import LogicGates from "./components/LogicGates";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/decipher" element={<Decipher />} />
          <Route path="/pathfinder" element={<Pathfinder />} />
          <Route path="/logicgates" element={<LogicGates />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
