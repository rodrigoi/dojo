import { describe, expect, test } from "bun:test";
import { findLoopPositions, findStart, moveGuard } from "./index";

const grid =
  "....#..............#............#..............#.............#..^.............#.#...............#...";
const size = 10;

describe("Day 6: Guard Movement", () => {
  test("should find the start position and direction", () => {
    const [start, direction] = findStart(grid);
    expect(start).toBe(64);
    expect(direction).toBe("^");
  });

  test("should return the number of distinct positions visited", () => {
    const [start, direction] = findStart(grid);

    const { visitedCount } = moveGuard(grid, size, start, direction);
    expect(visitedCount).toBe(41);
  });

  test.skip("should return the number of positions that create a loop", () => {
    const [start, direction] = findStart(grid);
    const loopCount = findLoopPositions(grid, size, start, direction);
    expect(loopCount).toBe(10);
  });
});
