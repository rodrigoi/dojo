import { describe, expect, test } from "bun:test";

import { sortedSquares } from ".";

describe("0977 - Squares of a Sorted Array", () => {
  test("should return the sorted squares of the array", () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
