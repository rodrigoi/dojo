import { describe, expect, test } from "bun:test";
import {
  calculateCalibrationResults,
  getPossibleResults,
  getStandardOperations,
  isValidEquation,
  parseEquations,
} from ".";

const input = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20
`;

describe("Day 7: Bridge Repair", () => {
  const operations = getStandardOperations();

  test("should parse input string into an array of equations", () => {
    const equations = parseEquations(input);
    expect(equations).toEqual([
      { result: 190, values: [10, 19] },
      { result: 3267, values: [81, 40, 27] },
      { result: 83, values: [17, 5] },
      { result: 156, values: [15, 6] },
      { result: 7290, values: [6, 8, 6, 15] },
      { result: 161011, values: [16, 10, 13] },
      { result: 192, values: [17, 8, 14] },
      { result: 21037, values: [9, 7, 18, 13] },
      { result: 292, values: [11, 6, 16, 20] },
    ]);
  });

  test("should validate if an equation is valid for equations with two values", () => {
    expect(isValidEquation(190, [10, 19], operations)).toBe(true);
    expect(isValidEquation(190, [10, 20], operations)).toBe(false);
  });

  test("should validate if an equation is valid for equations with n values", () => {
    expect(isValidEquation(3267, [81, 40, 27], operations)).toBe(true);
    expect(isValidEquation(3267, [81, 40, 28], operations)).toBe(false);
  });

  test("should get possible results for an equation with two values", () => {
    expect(getPossibleResults([10, 19], operations)).toEqual([29, 190]);
  });

  test("should get possible results for an equation with three values", () => {
    expect(getPossibleResults([81, 40, 27], operations)).toEqual([
      148, 3267, 3267, 87480,
    ]);
  });

  test("should calculate the calibration results", () => {
    const input = [
      { result: 190, values: [10, 19] },
      { result: 3267, values: [81, 40, 27] },
      { result: 83, values: [17, 5] },
      { result: 156, values: [15, 6] },
      { result: 7290, values: [6, 8, 6, 15] },
      { result: 161011, values: [16, 10, 13] },
      { result: 192, values: [17, 8, 14] },
      { result: 21037, values: [9, 7, 18, 13] },
      { result: 292, values: [11, 6, 16, 20] },
    ];
    const result = calculateCalibrationResults(input, operations);
    expect(result).toBe(3749);
  });

  test("should calculate the calibration results with contatenation operator", () => {
    const input = [
      { result: 190, values: [10, 19] },
      { result: 3267, values: [81, 40, 27] },
      { result: 83, values: [17, 5] },
      { result: 156, values: [15, 6] },
      { result: 7290, values: [6, 8, 6, 15] },
      { result: 161011, values: [16, 10, 13] },
      { result: 192, values: [17, 8, 14] },
      { result: 21037, values: [9, 7, 18, 13] },
      { result: 292, values: [11, 6, 16, 20] },
    ];
    const result = calculateCalibrationResults(input, [
      ...operations,
      (a, b) => parseInt(`${a}${b}`),
    ]);
    expect(result).toBe(11387);
  });
});
