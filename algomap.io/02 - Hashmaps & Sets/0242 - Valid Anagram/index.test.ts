import { describe, expect, test } from "bun:test";

import { isAnagram } from ".";

describe("0242 - Valid Anagram", () => {
  test("should identify if two strings are valid anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTrue();
    expect(isAnagram("rata", "cat")).toBeFalse();
  });
});
