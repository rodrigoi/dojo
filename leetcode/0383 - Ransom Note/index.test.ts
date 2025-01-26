import { describe, expect, test } from "bun:test";

import { canConstruct } from ".";

describe("0383 - Ransom Note", () => {
  test("should identify if the ransom note can be constructed", () => {
    expect(canConstruct("a", "b")).toBeFalse();
    expect(canConstruct("aa", "ab")).toBeFalse();
    expect(canConstruct("aa", "aab")).toBeTrue();
  });
});
