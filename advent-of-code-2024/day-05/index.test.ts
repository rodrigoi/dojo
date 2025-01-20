import { describe, expect, test } from "bun:test";
import { isValidOrder, sortUpdate } from "./index";

describe("Day 5: Safety Manual Updates", () => {
  const sampleRules = [
    { before: 47, after: 53 },
    { before: 97, after: 13 },
    { before: 97, after: 61 },
    { before: 97, after: 47 },
    { before: 75, after: 29 },
    { before: 61, after: 13 },
    { before: 75, after: 53 },
    { before: 29, after: 13 },
    { before: 97, after: 29 },
    { before: 53, after: 29 },
    { before: 61, after: 53 },
    { before: 97, after: 53 },
    { before: 61, after: 29 },
    { before: 47, after: 13 },
    { before: 75, after: 47 },
    { before: 97, after: 75 },
    { before: 47, after: 61 },
    { before: 75, after: 61 },
    { before: 47, after: 29 },
    { before: 75, after: 13 },
    { before: 53, after: 13 },
  ];

  describe("isValidOrder", () => {
    test("should return true for valid updates", () => {
      const validUpdates = [
        [75, 47, 61, 53, 29],
        [97, 61, 53, 29, 13],
        [75, 29, 13],
      ];

      validUpdates.forEach((update) => {
        expect(isValidOrder(update, sampleRules)).toBe(true);
      });
    });

    test("should return false for invalid updates", () => {
      const invalidUpdates = [
        [75, 97, 47, 61, 53], // violates 97|75
        [61, 13, 29], // violates 29|13
        [97, 13, 75, 29, 47], // multiple violations
      ];

      invalidUpdates.forEach((update) => {
        expect(isValidOrder(update, sampleRules)).toBe(false);
      });
    });
  });

  describe("sortUpdate", () => {
    test("should correctly sort invalid updates", () => {
      const testCases = [
        {
          input: [75, 97, 47, 61, 53],
          expected: [97, 75, 47, 61, 53],
        },
        {
          input: [61, 13, 29],
          expected: [61, 29, 13],
        },
        {
          input: [97, 13, 75, 29, 47],
          expected: [97, 75, 47, 29, 13],
        },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(sortUpdate(input, sampleRules)).toEqual(expected);
      });
    });

    test("should not change already valid updates", () => {
      const validUpdate = [75, 47, 61, 53, 29];
      expect(sortUpdate(validUpdate, sampleRules)).toEqual(validUpdate);
    });
  });
});
