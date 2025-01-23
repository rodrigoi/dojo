import { describe, expect, test } from "bun:test";

import { findClosestNumberToZero } from "./index";

/**
 * https://leetcode.com/problems/find-closest-number-to-zero/description/
 * Difficulty: Easy
 */

describe("Find Closest Number to Zero", () => {
  test("should return 1 when given nums = [-4, -2, 1, 4, 8]", () => {
    expect(findClosestNumberToZero([-4, -2, 1, 4, 8])).toBe(1);
  });

  test("should return 1 when given nums = [2, -1, 1]", () => {
    expect(findClosestNumberToZero([2, -1, 1])).toBe(1);
  });

  test("should return 0 when given nums = [0]", () => {
    expect(findClosestNumberToZero([0])).toBe(0);
  });

  test("should return 1 when given nums = [-1, 1, -1, 1, -1]", () => {
    expect(findClosestNumberToZero([-1, 1, -1, 1, -1])).toBe(1);
  });

  test("should return -1 when given nums = [-1, 2, -3, 4, -5]", () => {
    expect(findClosestNumberToZero([-1, 2, -3, 4, -5])).toBe(-1);
  });
});
