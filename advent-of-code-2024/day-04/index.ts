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

const diagonalPairs = [
  // [topLeft_x, topLeft_y, bottomRight_x, bottomRight_y]
  [-1, -1, 1, 1],
  // [topRight_x, topRight_y, bottomLeft_x, bottomLeft_y]
  [1, -1, -1, 1],
];

export const findPatterns = (grid: string, size: number) =>
  [...grid].reduce(
    (acc: number[], _, idx: number) => {
      if (grid[idx] === "X") {
        // if the cell is X, get its coordinates
        const [x, y] = indexToCoordinates(size)(idx);

        for (const direction of directions) {
          const [dx1, dy1, dx2, dy2, dx3, dy3] = direction;
          const endX = x + dx3;
          const endY = y + dy3;

          if (isInBounds(size)(endX, endY)) {
            const pos1 = coordinatesToIndex(size)(x + dx1, y + dy1);
            const pos2 = coordinatesToIndex(size)(x + dx2, y + dy2);
            const pos3 = coordinatesToIndex(size)(x + dx3, y + dy3);

            if (
              grid[pos1] === "M" &&
              grid[pos2] === "A" &&
              grid[pos3] === "S"
            ) {
              acc[0]++;
            }
          }
        }
      }

      if (grid[idx] === "A") {
        const [x, y] = indexToCoordinates(size)(idx);

        if (
          isInBounds(size)(x - 1, y - 1) &&
          isInBounds(size)(x + 1, y + 1) &&
          isInBounds(size)(x + 1, y - 1) &&
          isInBounds(size)(x - 1, y + 1)
        ) {
          const positions = diagonalPairs.map(([dx1, dy1, dx2, dy2]) => ({
            pos1: coordinatesToIndex(size)(x + dx1, y + dy1),
            pos2: coordinatesToIndex(size)(x + dx2, y + dy2),
          }));

          // Check if either diagonal has M-S or S-M pattern
          const diagonal1Valid =
            (grid[positions[0].pos1] === "M" &&
              grid[positions[0].pos2] === "S") ||
            (grid[positions[0].pos1] === "S" &&
              grid[positions[0].pos2] === "M");

          const diagonal2Valid =
            (grid[positions[1].pos1] === "M" &&
              grid[positions[1].pos2] === "S") ||
            (grid[positions[1].pos1] === "S" &&
              grid[positions[1].pos2] === "M");

          if (diagonal1Valid && diagonal2Valid) {
            acc[1]++;
          }
        }
      }

      return acc;
    },
    [0, 0]
  );

if (import.meta.main) {
  const input = await Bun.file("./advent-of-code-2024/day-04/input.txt").text();
  const lines = input.split("\n");
  const grid = lines.reduce((acc, line) => acc + line, "");
  const size = 140;

  const [xmasCount, masCount] = findPatterns(grid, size);
  console.log(xmasCount, masCount);
}
