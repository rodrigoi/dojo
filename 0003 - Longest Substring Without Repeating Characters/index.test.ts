import { describe, expect, test } from "bun:test";

import { lengthOfLongestSubstring } from ".";

describe("Longest Substring Without Repeating Characters", () => {
  test("should return 3 when given 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });

  test("should return 1 when given 'bbbbb'", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });

  test("should return 3 when given 'pwwkew'", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });

  test("should return 0 when given ''", () => {
    expect(lengthOfLongestSubstring("")).toEqual(0);
  });
});
