import { describe, expect, test } from "bun:test";

import { longestPalindrome } from ".";

describe("0005 - Longest Palindromic Substring", () => {
  test("should return 'bab' when given 'babad'", () => {
    expect(longestPalindrome("babad")).toEqual("bab");
  });

  test("should return 'bb' when given 'cbbd'", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });

  test("should return 'a' when given 'a'", () => {
    expect(longestPalindrome("a")).toEqual("a");
  });

  test("should return 'a' when given 'ac'", () => {
    expect(longestPalindrome("ac")).toEqual("a");
  });
});
