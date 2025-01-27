// clockwise rotation directions.
const directions = [
  [1, 0], // left to right
  [0, 1], // top down
  [-1, 0], // right to left
  [0, -1], // down up
];

export const spiralOrder = (matrix: number[][]): number[] => {
  const width = matrix[0].length;
  const height = matrix.length;

  const result = [];

  let x = 0;
  let y = 0;

  let direction = 0;

  const visited = new Set<number>();

  while (result.length < width * height) {
    result.push(matrix[y][x]);
    visited.add(y * width + x);

    const [dx, dy] = directions[direction];
    const newX = x + dx;
    const newY = y + dy;

    if (
      newX < 0 ||
      newX >= width ||
      newY < 0 ||
      newY >= height ||
      visited.has(newY * width + newX)
    ) {
      direction = (direction + 1) % 4;
      const [dx, dy] = directions[direction];
      x = x + dx;
      y = y + dy;
      continue;
    }

    x = newX;
    y = newY;
  }

  return result;
};
