import { describe, expect, test } from "bun:test";

import { removeDuplicates } from ".";

describe("Remove Duplicates from Sorted Array", () => {
  test("should return 2 when given [1, 1, 2]", () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2);
  });

  test("should return 5 when given [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  });
});
