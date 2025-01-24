import { describe, expect, test } from "bun:test";

import { maxArea } from ".";

describe("0011 - Container With Most Water", () => {
  test.skip("should return the correct value", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(0);
  });
});
