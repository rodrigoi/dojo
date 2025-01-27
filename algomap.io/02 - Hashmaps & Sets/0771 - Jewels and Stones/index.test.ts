import { describe, expect, test } from "bun:test";

import { numJewelsInStones } from ".";

describe("0771 - Jewels and Stones", () => {
  test("should return correct number of jewels", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
    expect(numJewelsInStones("z", "ZZ")).toEqual(0);
  });
});
