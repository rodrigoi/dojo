import { describe, test, expect } from "bun:test";

import { isValid } from "./index";

describe("Valid Parentheses", () => {
  test("should return true when given ()", () => {
    expect(isValid("()")).toEqual(true);
  });

  test("should return true when given ()[]{}", () => {
    expect(isValid("()[]{}")).toEqual(true);
  });

  test("should return false when given (]", () => {
    expect(isValid("(]")).toEqual(false);
  });

  test("should return false when given ([)]", () => {
    expect(isValid("([)]")).toEqual(false);
  });

  test("should return true when given {[]}", () => {
    expect(isValid("{[]}")).toEqual(true);
  });
});
