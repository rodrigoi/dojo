import chalk from "chalk";

/**
 * Relative coordinates for all the neighbours of a cell situated at [x, y].
 * Values represent the values to be added to (x,y) to obtain each neighbour cell
 * coordinates so they can be translated to indexes.
 *
 * [-1, -1], [0, -1], [1, -1],
 * [-1,  0], [x,  y], [1,  0],
 * [-1,  1], [0,  1], [1,  1]
 */
const neighbourRelativeIndexes = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
] as const;

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

/**
 * Returns an array of all the indexes on the forest array
 * of the neighbouring cells of the provided coordinates.
 * Curried to the grid size.
 */
const getNeighbourIndexes = (size: number) => (x: number, y: number) =>
  neighbourRelativeIndexes
    .map((relativeIndex) => {
      const neighbourX = relativeIndex[0] + x;
      const neighbourY = relativeIndex[1] + y;

      /**
       * bail if out of bounds
       */
      if (
        neighbourX < 0 ||
        neighbourY < 0 ||
        neighbourX > size - 1 ||
        neighbourY > size - 1
      ) {
        return null;
      }

      return neighbourX + neighbourY * size;
    })
    .filter((index) => index !== null) as Array<number>;

/**
 * Returns the count of cells with burning trees.
 * Curried to the grid size.
 */
const getBurningNeighboursCount =
  (size: number) => (forest: Array<number>, cellIndex: number) => {
    const [x, y] = indexToCoordinates(size)(cellIndex);
    const neighbourIndexes = getNeighbourIndexes(size)(x, y);

    return neighbourIndexes
      .map((index) => forest[index])
      .reduce((prev, cell) => (cell > 0 ? prev + 1 : prev), 0);
  };

/**
 * Returns a new instance of the forest grid with the game rules applied.
 * The rules of the game are:
 * - if a cell is empty (-2), it stays empty (cells never come alive).
 * - if a cell has a burned tree (0), it stays burned (no resurrections).
 * - if a cell has a tree (-1), we calculate the probability of it catching fire.
 *   this depends on the number of burning neighbours.
 * - if a cell has a burnig tree (>0), we decrement the burning time.
 *
 * Curried for grid size, default burn time and catching fire probabilities.
 */
export const nextProbableState =
  (size: number, burnTime: number, catchFire: Array<number>) =>
  (forest: Array<number>) =>
    forest.map((cell, index) => {
      //if a cell is empty or has a burned tree, it stays the same.
      if (cell === -2 || cell === 0) {
        return cell;
      }

      //if a tree is burning, the burning counter goes down.
      if (cell > 0) {
        return cell - 1;
      }

      //calculate chance of a tree catching fire
      return Math.random() <=
        catchFire[getBurningNeighboursCount(size)(forest, index)]
        ? burnTime
        : cell;
    });

/**
 * Creates a forest with the default values, using the provided parameters.
 * Returns an array that:
 * - contains as many elements as a NxN (size*size) grid.
 * - cell by default are empty, with a -2 value.
 * - using forestDensity, calculates if a cell should contain a tree.
 * - lights in fire the central nine cells regardless of the original value.
 * And an instance of nextProbableState function configured with the same parameters.
 */
export const create = (
  size: number,
  density: number,
  burnTime: number,
  catchFire: Array<number>
): [Array<number>, (forest: Array<number>) => Array<number>] => {
  /**
   * calculate the coordinates of the central cell.
   */
  const centerX = size / 2 - 1;
  const centerY = size / 2 - 1;

  const neighbourIndexes = new Set(getNeighbourIndexes(size)(centerX, centerY));
  neighbourIndexes.add(coordinatesToIndex(size)(centerX, centerY));

  /**
   * create an array for all the cells in the forest, with their default values.
   */
  const forest = Array(size * size)
    .fill(-2)
    .map<number>((cell, index) => {
      // light the central nine cells on fire
      if (neighbourIndexes.has(index)) {
        return burnTime;
      }
      // calculate the chance of a grid cell to have a tree.
      return Math.random() <= density ? -1 : cell;
    });

  return [forest, nextProbableState(size, burnTime, catchFire)];
};

/**
 * Renders a forest array as a grid of characters to the standard output.
 * Curried for grid size.
 */
export const render =
  (size: number) =>
  (forest: Array<number>, t = 0) => {
    //clear console.
    console.write("\x1Bc");

    //show elapsed time
    console.log(`Minute ${t}\n`);

    const stats = new Map<number, number>([
      [-1, 0], //remaining trees
      [0, 0], //burned trees
      [1, 0], //burning trees
    ]);

    forest.forEach((cell, index) => {
      const cellValue =
        cell === -2
          ? "  "
          : cell === -1
          ? chalk.green("▓▓")
          : cell === 0
          ? chalk.white("▓▓")
          : chalk.red("▓▓");

      console.write(cellValue);

      if (cell > 0) {
        stats.set(1, stats.get(1)! + 1);
      } else {
        stats.set(cell, stats.get(cell)! + 1);
      }

      if ((index + 1) % size === 0) {
        console.write("\n");
      }
    });

    console.log("");
    console.log(chalk.red(`Burning Trees: ${stats.get(1)}`));
    console.log(chalk.green(`Remaining Trees: ${stats.get(-1)}`));
    console.log(`Burned Trees: ${stats.get(0)}`);
  };
