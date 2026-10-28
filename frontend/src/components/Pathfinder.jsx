import { useState } from "react";
import "./Pathfinder.css";
import { findPath } from "./findPath.js";

const SIZE = 25;

const Pathfinder = () => {
  const cells = [];
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [walls, setWalls] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [path, setPath] = useState([]);

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
    <main className="pathfinder-shell">
      <section className="pathfinder-card" aria-labelledby="pathfinder-title">
        <p className="pathfinder-eyebrow">Explore a route</p>
        <h1 id="pathfinder-title">Pathfinder</h1>
        <p className="pathfinder-description">
          Choose a start and end point, then draw walls to shape the path.
        </p>

        <div className="pathfinder-legend" aria-label="Grid key">
          <span><i className="legend-start" />Start</span>
          <span><i className="legend-end" />End</span>
          <span><i className="legend-wall" />Wall</span>
          <span><i className="legend-path" />Path</span>
        </div>

        <div className="pathfinder-board">
          <div
            className="pathfinder-grid"
            onMouseUp={() => {
              setIsDrawing(false);
            }}
            onMouseLeave={() => {
              setIsDrawing(false);
            }}
          >
            {cells}
          </div>
        </div>

        <div className="pathfinder-actions">
          <button
            className="pathfinder-button pathfinder-button-primary"
            onClick={() => setPath(findPath(start, end, walls))}
          >
            Start
          </button>
          <button
            className="pathfinder-button pathfinder-button-secondary"
            onClick={() => {
              setStart(null);
              setEnd(null);
              setWalls([]);
              setPath([]);
            }}
          >
            Reset
          </button>
        </div>
      </section>
    </main>
  );
};

export default Pathfinder;
