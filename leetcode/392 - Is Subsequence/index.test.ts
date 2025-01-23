import { describe, expect, test } from "bun:test";

import { isSubsequence } from ".";

/**
 * https://leetcode.com/problems/is-subsequence/
 * Difficulty: Easy
 */

describe("Is Subsequence", () => {
  test("should return true when given s = 'abc', t = 'ahbgdc'", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  test("should return true when given s = '', t = ''", () => {
    expect(isSubsequence("", "")).toBe(true);
  });

  test("should return true when given s = 'abc', t = 'abc'", () => {
    expect(isSubsequence("abc", "abc")).toBe(true);
  });

  test("should return true when given s = 'bgd', t = 'ahbgdc'", () => {
    expect(isSubsequence("bgd", "ahbgdc")).toBe(true);
  });

  test("should return false when given s = 'axc', t = 'ahbgdc'", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  test("should return false when given s = 'acb', t = 'ahbgdc'", () => {
    expect(isSubsequence("acb", "ahbgdc")).toBe(false);
  });
});
