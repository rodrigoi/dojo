import { describe, expect, test } from "bun:test";

import { productExceptSelf } from "./index";

describe("Product of Array expect Self", () => {
  test("should return correct product for [1]", () => {
    const input = [1];
    const result = productExceptSelf(input);
    expect(result).toEqual([1]);
  });

  test("should return correct product for [0, 1, 2, 3, 4]", () => {
    const input = [0, 1, 2, 3, 4];
    const result = productExceptSelf(input);
    expect(result).toEqual([24, 0, 0, 0, 0]);
  });

  test("should return correct product for [1, 2, 3, 4]", () => {
    const input = [1, 2, 3, 4];
    const result = productExceptSelf(input);
    expect(result).toEqual([24, 12, 8, 6]);
  });
});
