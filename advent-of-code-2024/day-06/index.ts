import ProgressBar from "progress";

const coordinatesToIndex = (size: number) => (x: number, y: number) =>
  x + y * size;

const indexToCoordinates = (size: number) => (index: number) =>
  [index % size, Math.floor(index / size)];

const isInBounds = (size: number) => (x: number, y: number) =>
  x >= 0 && x < size && y >= 0 && y < size;

const input = await Bun.file("./advent-of-code-2024/day-06/input.txt").text();
const lines = input.split("\n");
const grid = lines.reduce((acc, line) => acc + line, "");
const size = 130;

const OBSTACLE = "#";

const directions = "^>v<";

const directionMovements: Record<string, [number, number]> = {
  "^": [0, -1],
  ">": [1, 0],
  v: [0, 1],
  "<": [-1, 0],
};

const rotations: Record<string, string> = {
  "^": ">",
  ">": "v",
  v: "<",
  "<": "^",
};

export const findStart = (grid: string): [number, string] => {
  const startIndex = [...grid].findIndex((char) => directions.includes(char));
  return [startIndex, grid[startIndex]];
};

const [start, direction] = findStart(grid);

type State = { index: number; direction: string };

export const moveGuard = (
  grid: string,
  size: number,
  index: number,
  direction: string,
  visited: Set<number> = new Set(),
  states: Array<State> = []
): { visitedCount: number; isLoop: boolean } => {
  visited.add(index);
  const currentState = { index, direction };

  // Check if we've been in this exact state before (position + direction)
  const stateIndex = states.findIndex(
    (s) => s.index === index && s.direction === direction
  );

  if (stateIndex !== -1) {
    // We found a loop!
    return { visitedCount: visited.size, isLoop: true };
  }
  states.push(currentState);

  // read the next position depending on the direction.
  const [x, y] = indexToCoordinates(size)(index);
  const [dx, dy] = directionMovements[direction];
  const nextX = x + dx;
  const nextY = y + dy;

  // if the end of the grid is reached, the movement stops.
  if (!isInBounds(size)(nextX, nextY)) {
    return { visitedCount: visited.size, isLoop: false };
  }

  const nextIndex = coordinatesToIndex(size)(nextX, nextY);

  if (grid[nextIndex] === OBSTACLE) {
    return moveGuard(grid, size, index, rotations[direction], visited, states);
  }

  return moveGuard(grid, size, nextIndex, direction, visited, states);
};

const partOneResult = moveGuard(grid, size, start, direction);

export const findLoopPositions = (
  grid: string,
  size: number,
  start: number,
  direction: string
): number => {
  let loopCount = 0;

  var bar = new ProgressBar("Running Simulations [:bar] :percent :etas", {
    total: grid.length,
    complete: "=",
    incomplete: " ",
    width: 50,
    clear: true,
  });

  for (let i = 0; i < grid.length; i++) {
    bar.tick();

    if (grid[i] === OBSTACLE || i === start) {
      continue;
    }

    const newGrid = grid.slice(0, i) + OBSTACLE + grid.slice(i + 1);
    const { isLoop } = moveGuard(newGrid, size, start, direction);
    if (isLoop) {
      loopCount++;
    }
  }

  return loopCount;
};
const partTwoResult = findLoopPositions(grid, size, start, direction);

console.log(`Positions the guard visited: ${partOneResult.visitedCount}`);
console.log(`Possible positions for creating a loop: ${partTwoResult}`);
