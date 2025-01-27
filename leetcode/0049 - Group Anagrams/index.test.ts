import { describe, expect, test } from "bun:test";

import { groupAnagrams } from "./index";

describe("0049 - Group Anagrams", () => {
  test("should return the correct result", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);

    expect(groupAnagrams([""])).toEqual([[""]]);
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });
});
