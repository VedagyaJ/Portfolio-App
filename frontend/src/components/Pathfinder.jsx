import { useState } from "react";
import "./Pathfinder.css";
import { findPath } from "./findPath.js"

const SIZE = 25;

const Pathfinder = () => {
  const cells = [];
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [walls, setWalls] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [path, setPath] = useState([])

  const addWall = (key) => {
    if (key === start || key === end) return;

    setWalls((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const handleCellClick = (r, c) => {
    const key = `${r},${c}`;

    // Set the start and end if they aren't already set
    if (!start) {
      setStart(key);
    } else if (!end && key !== start) {
      setEnd(key);
    } else if (key !== start && key !== end) {
      walls.includes(key)
        ? setWalls(walls.filter((wall) => wall !== key)) // remove if wall already exists
        : addWall(key); // create new wall
    }
  };

  // Create grid with 25 rows and 25 columns
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const key = `${r},${c}`;
      let className = "cell";

      // Add the required class if the cell is the start or the end
      if (key === start) className += " start";
      if (key === end) className += " end";
      if (walls.includes(key)) className += " wall";
      if (path.includes(key)) className += " path";

      cells.push(
        <div
          key={key}
          className={className}
          // If mouse is down, set start or end, else start dragging mode
          onMouseDown={(e) => {
            e.preventDefault();
            handleCellClick(r, c);
            if (start && end) setIsDrawing(true);
          }}
          onMouseEnter={() => {
            if (isDrawing) addWall(key);
          }}
        />,
      );
    }
  }

  return (
    <div>
      <h1>Pathfinder</h1>
      <div
        className="grid"
        onMouseUp={() => {
          setIsDrawing(false);
        }}
        onMouseLeave={() => {
          setIsDrawing(false);
        }}
      >
        {cells}
      </div>
      <button onClick={() => setPath(findPath(start, end, walls))}>Start</button>
    </div>
  );
};

export default Pathfinder;
