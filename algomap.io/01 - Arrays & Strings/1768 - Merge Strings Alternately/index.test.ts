import { describe, expect, test } from "bun:test";

import { mergeAlternately } from "./index";

/**
 * https://leetcode.com/problems/merge-strings-alternately/
 * Difficulty: Easy
 */

describe("1768 - Merge Strings Alternately", () => {
  test("should return 'apbqcr' when given word1 = 'abc', word2 = 'pqr'", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  });

  test("should return 'apbqrs' when given word1 = 'ab', word2 = 'pqrs'", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  });

  test("should return 'abcd' when given word1 = 'abcd', word2 = ''", () => {
    expect(mergeAlternately("abcd", "")).toBe("abcd");
  });

  test("should return 'ab' when given word1 = 'a', word2 = 'b'", () => {
    expect(mergeAlternately("a", "b")).toBe("ab");
  });
});
