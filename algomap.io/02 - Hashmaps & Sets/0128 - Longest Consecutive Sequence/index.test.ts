import { describe, expect, test } from "bun:test";

import { longestConsecutive } from ".";

describe("0128 - Longest Consecutive Sequence", () => {
  test("should return the lenght of the longest consecutive sequence", () => {
    expect(longestConsecutive([])).toEqual(0);
    expect(longestConsecutive([1])).toEqual(1);
    expect(longestConsecutive([1, 2, 0, 1])).toEqual(3);
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4);
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1, 8])).toEqual(9);
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
  });
});
