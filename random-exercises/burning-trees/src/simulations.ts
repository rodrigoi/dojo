import ProgressBar from "progress";

import { create, render } from "./forest";

/**
 * Simulates the burning of a forest.
 *
 * @param {function} nextProbableState - A function that takes the current state of the forest and returns the next probable state.
 * @returns {function} A function that takes the initial state of the forest and the initial time, and returns the time it took for the fire to extinguish and the proportion of the forest that was burned.
 */
const simulate = (
  nextProbableState: (forest: Array<number>) => Array<number>
) => {
  const runSimulation = (forest: Array<number>, t = 0): [number, number] => {
    const burningTrees = forest.reduce(
      (prev, cell) => (cell > 0 ? prev + 1 : prev),
      0
    );

    // bail if no more trees burning.
    if (burningTrees === 0) {
      const [burned, remaing] = forest.reduce(
        (prev, cell) =>
          cell === 0
            ? [prev[0] + 1, prev[1]]
            : cell === -1
            ? [prev[0], prev[1] + 1]
            : prev,
        [0, 0]
      );

      return [t, burned / (burned + remaing)];
    }

    t++;
    return runSimulation(nextProbableState(forest), t);
  };

  return runSimulation;
};

/**
 * Simulates the burning of a forest with rendering and returns a function that can run the simulation.
 *
 * @param {function} nextProbableState - A function that takes the current state of the forest and returns the next probable state.
 * @param {number} size - The size of the forest grid.
 * @returns {function} A function that takes the initial state of the forest and the initial time, and returns a Promise that resolves with the time it took for the fire to extinguish and the proportion of the forest that was burned.
 */
const simulateWithRenderAsync = (
  nextProbableState: (forest: Array<number>) => Array<number>,
  size: number
) => {
  const runSimulation = async (forest: Array<number>, t = 0): Promise<void> => {
    render(size)(forest, t);
    // get a 25ms delay between frames
    await new Promise((resolve) => setTimeout(resolve, 25));

    const burningTrees = forest.reduce(
      (prev, cell) => (cell > 0 ? prev + 1 : prev),
      0
    );
    /**
     * bail if no more trees burning
     */
    if (burningTrees === 0) {
      return;
    }

    t++;
    return await runSimulation(nextProbableState(forest), t);
  };

  return runSimulation;
};

/**
 * Simulates the burning of a forest with visualization.
 *
 * @param {number} size - The size of the forest grid.
 * @param {number} density - The probability of a cell to contain a tree at t0.
 * @param {number} burnTime - Time in minutes that it takes a tree to burn.
 * @param {Array<number>} catchFire - Probability of a tree to catch fire depending on the number of neighbours that are on fire.
 * @returns {Promise<void>} A Promise that resolves when the simulation is complete.
 */
export const simulateVisualization = async (
  size: number,
  density: number,
  burnTime: number,
  catchFire: Array<number>
) => {
  console.time("Simulate Visualization");

  const [forest, nextProbableState] = create(
    size,
    density,
    burnTime,
    catchFire
  );

  await simulateWithRenderAsync(nextProbableState, size)(forest);

  console.log("");
  console.timeEnd("Simulate Visualization");
};

/**
 * Simulates the average burn time of a forest fire.
 *
 * @param {number} size - The size of the forest grid.
 * @param {number} density - The probability of a cell to contain a tree at t0.
 * @param {number} burnTime - Time in minutes that it takes a tree to burn.
 * @param {Array<number>} catchFire - Probability of a tree to catch fire depending on the number of neighbours that are on fire.
 * @param {number} runs - The number of simulations to run.
 * @returns {void} This function does not return anything. It logs the average burn time to the console.
 */
export const simulateAverageBurnTime = (
  size: number,
  density: number,
  burnTime: number,
  catchFire: Array<number>,
  runs: number
) => {
  console.time("Simulate Average Burn Time");

  var bar = new ProgressBar("Running Simulations [:bar] :percent :etas", {
    total: runs,
    complete: "=",
    incomplete: " ",
    width: 50,
    clear: true,
  });

  const averageBurnTime =
    Array(runs)
      .fill(0)
      .map(() => {
        const [forest, nextProbableState] = create(
          size,
          density,
          burnTime,
          catchFire
        );

        bar.tick();
        return simulate(nextProbableState)(forest, 0);
      })
      .reduce((prev, [curr]) => prev + curr, 0) / runs;

  console.log(
    `El tiempo promedio que dura un incendio en extinguirse naturalmente es de ${averageBurnTime} minutos.`
  );
  console.log("");
  console.timeEnd("Simulate Average Burn Time");
};

/**
 * Simulates the burning of a forest by varying the density of trees.
 *
 * @param {number} size - The size of the forest grid.
 * @param {number} minDensity - The minimum density of trees.
 * @param {number} maxDensity - The maximum density of trees.
 * @param {number} step - The step size for increasing the density.
 * @param {number} burnTime - Time in minutes that it takes a tree to burn.
 * @param {Array<number>} catchFire - Probability of a tree to catch fire depending on the number of neighbours that are on fire.
 * @param {number} runs - The number of simulations to run for each density.
 * @returns {void} This function does not return anything. It logs the average burn time for each density to the console.
 */
export const simulateByDensity = (
  size: number,
  burnTime: number,
  catchFire: Array<number>
) => {
  console.time("Simulate Burn Average by Density");

  var bar = new ProgressBar(
    "Running Desity Simulations [:bar] :percent :etas",
    {
      total: 10 * 100,
      complete: "=",
      incomplete: " ",
      width: 50,
      clear: true,
    }
  );

  const burntDensityAverages = new Map(
    Array.from({ length: 10 }, (_, i) => (i + 1) / 10).map((value) => {
      const burntAverage =
        Array(100)
          .fill(0)
          .map(() => {
            const [forest, nextProbableState] = create(
              size,
              value,
              burnTime,
              catchFire
            );

            bar.tick();
            return simulate(nextProbableState)(forest, 0);
          })
          .reduce((prev, [_, curr]) => prev + curr, 0) / 100;

      return [value, burntAverage];
    })
  );

  console.log("+----------+----------------+");
  console.log("| Densidad | Bosque Quemado |");
  console.log("+----------+----------------+");

  burntDensityAverages.forEach((burntAverage, density) => {
    console.log(
      `|   ${density === 1 ? "1.0" : density}    |     ${
        burntAverage * 100 < 10 ? "0" : ""
      }${(burntAverage * 100).toFixed(2)} %    |`
    );
    console.log("+----------+----------------+");
  });

  console.log("");
  console.timeEnd("Simulate Burn Average by Density");
};
