import { describe, expect, test } from "bun:test";

import { spiralOrder } from ".";

describe("0054 - Spiral Order", () => {
  test("should return clockwise order for a 2x2 square matrix", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    const result = spiralOrder(input);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  test("should return clockwise order for a 3x3 square matrix", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = spiralOrder(input);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("should return clockwise order for a 4x3 rectangular matrix", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const result = spiralOrder(input);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  test("should return clockwise order for a 3x4 rectangular matrix", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    const result = spiralOrder(input);
    expect(result).toEqual([1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]);
  });
});
