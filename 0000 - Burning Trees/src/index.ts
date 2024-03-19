/**
 * https://udesa-pc.github.io/tps/tp1/
 */

import {
  simulateVisualization,
  simulateAverageBurnTime,
  simulateByDensity,
} from "./simulations";

/**
 * Default values. These could be provided via arguments, configuration file or telepathy.
 */

// Size of the forest. The forest is a grid of NxN.
const size = 30;
// Probability of a cell to contain a tree at t0.
const forestDensity = 0.6;
// Time in minutes that it takes a tree to burn.
const burnTime = 3;
/**
 * Probability of a tree to catch fire depending on the number of neighbours that are on fire.
 * The index maps to the number of neighbours on fire.
 * For cero neighbours it's zero, for all eight is 100%.
 */
const catchFire = [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 1, 1];

//clear console.
console.write("\x1Bc");
// hide terminal cursor
console.write("\u001B[?25l");

await simulateVisualization(size, forestDensity, burnTime, catchFire);

simulateAverageBurnTime(size, forestDensity, burnTime, catchFire, 1000);

simulateByDensity(size, burnTime, catchFire);

// restore terminal cursor
console.write("\u001B[?25h");
