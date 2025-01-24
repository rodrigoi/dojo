import { describe, expect, test } from "bun:test";

import { removeElement } from ".";

describe("0027 - Remove Element", () => {
  test("should return 2 when given nums = [3, 2, 2, 3], val = 3", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
  });

  test("should return 5 when given nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
});
