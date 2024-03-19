import ProgressBar from "progress";

import { create, render } from "./forest";

/**
 *
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
      return [
        t,
        forest.reduce((prev, cell) => (cell === 0 ? prev + 1 : prev), 0) /
          forest.length,
      ];
    }

    t++;
    return runSimulation(nextProbableState(forest), t);
  };

  return runSimulation;
};

const simulateWithRenderAsync = (
  nextProbableState: (forest: Array<number>) => Array<number>,
  size: number
) => {
  const runSimulation = async (
    forest: Array<number>,
    t = 0
  ): Promise<[number, number]> => {
    const burningTrees = forest.reduce(
      (prev, cell) => (cell > 0 ? prev + 1 : prev),
      0
    );

    render(size)(forest, t);
    // get a 25ms delay between frames
    await new Promise((resolve) => setTimeout(resolve, 25));

    /**
     * bail if no more trees burning
     */
    if (burningTrees === 0) {
      return [
        t,
        forest.reduce((prev, cell) => (cell === 0 ? prev + 1 : prev), 0) /
          forest.length,
      ];
    }

    t++;
    return await runSimulation(nextProbableState(forest), t);
  };

  return runSimulation;
};

export const simulateVisualization = async (
  size: number,
  density: number,
  burnTime: number,
  catchFire: Array<number>
) => {
  const [forest, nextProbableState] = create(
    size,
    density,
    burnTime,
    catchFire
  );

  const simulateRender = simulateWithRenderAsync(nextProbableState, size);

  await simulateRender(forest);
};

export const simulateAverageBurnTime = (
  size: number,
  density: number,
  burnTime: number,
  catchFire: Array<number>,
  runs: number
) => {
  console.log("");
  var bar = new ProgressBar("Running Simulations [:bar] :percent :etas", {
    total: runs,
    complete: "=",
    incomplete: " ",
    width: 50,
    clear: true,
  });

  const [forest, nextProbableState] = create(
    size,
    density,
    burnTime,
    catchFire
  );

  const simulateAverage = simulate(nextProbableState);

  const averageBurnTime =
    Array(runs)
      .fill(0)
      .map(() => {
        bar.tick();
        return simulateAverage(forest, 0);
      })
      .reduce((prev, [curr]) => prev + curr, 0) / runs;

  console.log(
    `El tiempo promedio que dura un incendio en extinguirse naturalmente es de ${averageBurnTime} minutos.`
  );
};

export const simulateByDensity = (
  size: number,
  burnTime: number,
  catchFire: Array<number>
) => {
  console.log("");
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
            const simulateAverage = simulate(nextProbableState);

            bar.tick();
            return simulateAverage(forest, 0);
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
};
