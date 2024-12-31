const input = await Bun.file("./advent-of-code-2024/day-04/input.txt").text();

const lines = input.split("\n");
const grid = lines.reduce((acc, line) => acc + line, "");

// const grid =
//   "MMMSXXMASMMSAMXMSMSAAMXSXMAAMMMSAMASMSMXXMASAMXAMMXXAMMXXAMASMSMSASXSSSAXAMASAAAMAMMMXMMMMMXMXAXMASX";

// size of the grid
// const size = 10;
const size = 140;

/**
 * Returns the index on the forest array of the cell with
 * the specified coordinates.
 * Index is zero based to it can be used directly to access the forest array.
 * Curried to the grid size.
 */
const coordinatesToIndex = (size: number) => (x: number, y: number) =>
  x + y * size;

/**
 * Returns the [x, y] coordinates on the forest grid for the cell with
 * the specified index.
 * Curried to the grid size.
 */
const indexToCoordinates = (size: number) => (index: number) =>
  [index % size, Math.floor(index / size)];

const isInBounds = (size: number) => (x: number, y: number) =>
  x >= 0 && x < size && y >= 0 && y < size;

const directions = [
  // [dx1, dy1, dx2, dy2, dx3, dy3] for M, A, S positions
  [0, -1, 0, -2, 0, -3], // top
  [0, 1, 0, 2, 0, 3], // bottom
  [-1, 0, -2, 0, -3, 0], // left
  [1, 0, 2, 0, 3, 0], // right
  [-1, -1, -2, -2, -3, -3], // top left
  [1, -1, 2, -2, 3, -3], // top right
  [-1, 1, -2, 2, -3, 3], // bottom left
  [1, 1, 2, 2, 3, 3], // bottom right
];

const [xmasCount, masCount] = [...grid].reduce(
  (acc: number[], _, idx: number) => {
    if (grid[idx] === "X") {
      // if the cell is X, get its coordinates
      const [x, y] = indexToCoordinates(size)(idx);

      // check top
      if (
        isInBounds(size)(x, y - 3) &&
        grid[coordinatesToIndex(size)(x, y - 1)] === "M" &&
        grid[coordinatesToIndex(size)(x, y - 2)] === "A" &&
        grid[coordinatesToIndex(size)(x, y - 3)] === "S"
      ) {
        acc[0]++;
      }

      // check bottom
      if (
        isInBounds(size)(x, y + 3) &&
        grid[coordinatesToIndex(size)(x, y + 1)] === "M" &&
        grid[coordinatesToIndex(size)(x, y + 2)] === "A" &&
        grid[coordinatesToIndex(size)(x, y + 3)] === "S"
      ) {
        acc[0]++;
      }

      // check left
      if (
        isInBounds(size)(x - 3, y) &&
        grid[coordinatesToIndex(size)(x - 1, y)] === "M" &&
        grid[coordinatesToIndex(size)(x - 2, y)] === "A" &&
        grid[coordinatesToIndex(size)(x - 3, y)] === "S"
      ) {
        acc[0]++;
      }

      // check right
      if (
        isInBounds(size)(x + 3, y) &&
        grid[coordinatesToIndex(size)(x + 1, y)] === "M" &&
        grid[coordinatesToIndex(size)(x + 2, y)] === "A" &&
        grid[coordinatesToIndex(size)(x + 3, y)] === "S"
      ) {
        acc[0]++;
      }

      // check top left
      if (
        isInBounds(size)(x - 3, y - 3) &&
        grid[coordinatesToIndex(size)(x - 1, y - 1)] === "M" &&
        grid[coordinatesToIndex(size)(x - 2, y - 2)] === "A" &&
        grid[coordinatesToIndex(size)(x - 3, y - 3)] === "S"
      ) {
        acc[0]++;
      }

      // check top right
      if (
        isInBounds(size)(x + 3, y - 3) &&
        grid[coordinatesToIndex(size)(x + 1, y - 1)] === "M" &&
        grid[coordinatesToIndex(size)(x + 2, y - 2)] === "A" &&
        grid[coordinatesToIndex(size)(x + 3, y - 3)] === "S"
      ) {
        acc[0]++;
      }

      // check bottom left
      if (
        isInBounds(size)(x - 3, y + 3) &&
        grid[coordinatesToIndex(size)(x - 1, y + 1)] === "M" &&
        grid[coordinatesToIndex(size)(x - 2, y + 2)] === "A" &&
        grid[coordinatesToIndex(size)(x - 3, y + 3)] === "S"
      ) {
        acc[0]++;
      }

      // check bottom right
      if (
        isInBounds(size)(x + 3, y + 3) &&
        grid[coordinatesToIndex(size)(x + 1, y + 1)] === "M" &&
        grid[coordinatesToIndex(size)(x + 2, y + 2)] === "A" &&
        grid[coordinatesToIndex(size)(x + 3, y + 3)] === "S"
      ) {
        acc[0]++;
      }
    }

    if (grid[idx] === "A") {
      const [x, y] = indexToCoordinates(size)(idx);

      if (
        isInBounds(size)(x - 1, y - 1) &&
        isInBounds(size)(x + 1, y + 1) &&
        ((grid[coordinatesToIndex(size)(x - 1, y - 1)] === "M" &&
          grid[coordinatesToIndex(size)(x + 1, y + 1)] === "S") ||
          (grid[coordinatesToIndex(size)(x - 1, y - 1)] === "S" &&
            grid[coordinatesToIndex(size)(x + 1, y + 1)] === "M")) &&
        ((grid[coordinatesToIndex(size)(x + 1, y - 1)] === "M" &&
          grid[coordinatesToIndex(size)(x - 1, y + 1)] === "S") ||
          (grid[coordinatesToIndex(size)(x + 1, y - 1)] === "S" &&
            grid[coordinatesToIndex(size)(x - 1, y + 1)] === "M"))
      ) {
        acc[1]++;
      }
    }

    return acc;
  },
  [0, 0]
);

console.log(xmasCount, masCount);
