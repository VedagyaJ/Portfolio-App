import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Converter from "./components/Converter";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<Converter />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
