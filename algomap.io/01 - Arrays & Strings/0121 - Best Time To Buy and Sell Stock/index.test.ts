import { describe, expect, test } from "bun:test";

import { maxProfit } from "./index";

describe("0121 - Best Time To Buy and Sell Stock", () => {
  test("should return 5 when given prices = [7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test("should return 0 when given prices = [7,6,4,3,1]", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});
