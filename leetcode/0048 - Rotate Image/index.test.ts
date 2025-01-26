import { describe, expect, test } from "bun:test";

import { rotate } from ".";

describe("0048 - Rotate Image", () => {
  test("should rotate a 2x2 matrix", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    rotate(input);
    expect(input).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  test("should rotate a 3x3 matrix", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(input);
    expect(input).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});
