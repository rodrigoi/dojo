import { describe, expect, test } from "bun:test";

import romanToInt from "./index";

describe("0013 - Roman to Integer", () => {
  test("should return 1 when given I", () => {
    expect(romanToInt("I")).toEqual(1);
  });

  test("should return 5 when given V", () => {
    expect(romanToInt("V")).toEqual(5);
  });

  test("should return 3 when given III", () => {
    expect(romanToInt("III")).toEqual(3);
  });

  test("should return 4 when given IV", () => {
    expect(romanToInt("IV")).toEqual(4);
  });

  test("should return 9 when given IX", () => {
    expect(romanToInt("IX")).toEqual(9);
  });

  test("should return 58 when given LVIII", () => {
    expect(romanToInt("LVIII")).toEqual(58);
  });

  test("should return 1994 when given MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  });

  test("should return 3999 when given MMMCMXCIX", () => {
    expect(romanToInt("MMMCMXCIX")).toEqual(3999);
  });
});
