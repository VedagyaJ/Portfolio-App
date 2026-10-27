const fromKey = (key) => key.split(",").map(Number);
const toKey = ([r, c]) => `${r},${c}`;

export const findPath = (start, end, walls) => {
  walls = new Set(walls);
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // up, down, left, right
  const queue = [start]; // cells to be visited
  const visited = new Set([start]);

  const cameFrom = new Map();
  cameFrom.set(start, start);

  // Add neighbours to the queue unless it is a wall or out of bounds
  while (queue.length > 0) {
    const cell = queue.shift();

    // If cell is the end, find the path that lead to it and return it
    if (cell === end) {
      const path = [];
      let latestCell = end;

      while (latestCell !== start) {
        path.push(cameFrom.get(latestCell));
        latestCell = cameFrom.get(latestCell);
      }

      console.log(path)
      return path.reverse().slice(1);
    }

    const pos = fromKey(cell); // position of cell at start of queue
    const neighbours = directions.map(([dr, dc]) => [dr + pos[0], dc + pos[1]]);

    for (const [nr, nc] of neighbours) {
      const neighbour = toKey([nr, nc]);

      if (nr < 0 || nr > 24 || nc < 0 || nc > 24 || visited.has(neighbour))
        continue;

      if (!walls.has(neighbour)) {
        queue.push(neighbour);
        visited.add(neighbour);
        cameFrom.set(neighbour, cell);
      }
    }
  }

  return null;
};
