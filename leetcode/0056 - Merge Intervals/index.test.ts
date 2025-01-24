import { describe, expect, test } from "bun:test";

import { mergeIntervals } from ".";

describe("0056 - Merge Intervals", () => {
  test("should return correct intervals for [[1,3],[2,6],[8,10],[15,18]]", () => {
    const input = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = mergeIntervals(input);
    expect(result).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test("should return correct intervals for [[1,4],[4,5]]", () => {
    const input = [
      [1, 4],
      [4, 5],
    ];
    const result = mergeIntervals(input);
    expect(result).toEqual([[1, 5]]);
  });
});
