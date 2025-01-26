import { describe, expect, test } from "bun:test";

import { containsDuplicate } from ".";

describe("0217 - Contains Duplicate", () => {
  test("should return correct number of jewels", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTrue();
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalse();
  });
});
