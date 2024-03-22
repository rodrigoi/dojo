import { describe, expect, test } from "bun:test";

import { twoSum } from ".";

describe("Two Sum", () => {
  test("should return [0, 1] when given nums = [2, 7, 11, 15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("should return [1, 2] when given nums = [3, 2, 4], target = 6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("should return [0, 1] when given nums = [3, 3], target = 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
