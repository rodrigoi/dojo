import { describe, expect, test } from "bun:test";

import isPalindrome from "./index";

describe("0009 - Palindrome", () => {
  test("should return true if the number is a palindrome", () => {
    expect(isPalindrome(121)).toEqual(true);
  });

  test("should return false if the number is negative", () => {
    expect(isPalindrome(-121)).toEqual(false);
  });

  test("should return false if the number is not a palindrome", () => {
    expect(isPalindrome(10)).toEqual(false);
  });
});
