import { describe, expect, test } from "bun:test";

import { majorityElement } from ".";

describe("0169 - Majority Element", () => {
  test("should return the majority element for the provided arrays", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
    expect(majorityElement([6, 5, 5])).toEqual(5);
  });
});
