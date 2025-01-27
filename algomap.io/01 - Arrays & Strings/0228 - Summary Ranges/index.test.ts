import { describe, expect, test } from "bun:test";

import { findSummaryRanges } from "./index";

describe("0228 - Summary Ranges", () => {
  test("should return correct number of ranges for  [0, 1]", () => {
    const input = [0, 1];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["0->1"]);
  });

  test("should return correct number of ranges for [-1,0]", () => {
    const input = [-1, 0];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["-1->0"]);
  });

  test("should return correct number of ranges for [0,2,3,4,6,8,9]", () => {
    const input = [0, 2, 3, 4, 6, 8, 9];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["0", "2->4", "6", "8->9"]);
  });

  test("should return correct number of ranges for [-1,0,2,9]", () => {
    const input = [-1, 0, 2, 9];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["-1->0", "2", "9"]);
  });

  test("should return correct number of ranges for  [0, 1, 2, 4, 5]", () => {
    const input = [0, 1, 2, 4, 5];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["0->2", "4->5"]);
  });

  test("should return correct number of ranges for [0, 1, 2, 4, 5, 7]", () => {
    const input = [0, 1, 2, 4, 5, 7];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["0->2", "4->5", "7"]);
  });

  test("should return correct number of ranges for [-2147483648, -2147483647, 2147483647]", () => {
    const input = [-2147483648, -2147483647, 2147483647];
    const result = findSummaryRanges(input);
    expect(result).toEqual(["-2147483648->-2147483647", "2147483647"]);
  });
});
