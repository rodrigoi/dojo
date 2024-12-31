import { describe, expect, test } from "bun:test";

import { findPatterns } from "./index";

describe("Day 4: Pattern Finder", () => {
  test("should correctly count XMAS and MAS patterns in sample grid", () => {
    // Sample data from comments
    const sampleGrid =
      "MMMSXXMASMMSAMXMSMSAAMXSXMAAMMMSAMASMSMXXMASAMXAMMXXAMMXXAMASMSMSASXSSSAXAMASAAAMAMMMXMMMMMXMXAXMASX";
    const size = 10;

    const [xmasCount, masCount] = findPatterns(sampleGrid, size);

    expect(xmasCount).toBe(18);
    expect(masCount).toBe(9);
  });
});
