import { describe, expect, test } from "bun:test";
import { longestCommonPrefix, longestCommonPrefixBinarySearch } from "./index";

describe("0014 - Longest Common Prefix", () => {
  test("should return fl when given [flower, flow, flight]", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("should return an empty string when given [dog, racecar, car]", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });
});

describe("0014 - Longest Common Prefix Binary Search", () => {
  test("should return fl when given [flower, flow, flight]", () => {
    expect(
      longestCommonPrefixBinarySearch(["flower", "flow", "flight"])
    ).toEqual("fl");
  });

  test("should return an empty string when given [dog, racecar, car]", () => {
    expect(longestCommonPrefixBinarySearch(["dog", "racecar", "car"])).toEqual(
      ""
    );
  });
});
