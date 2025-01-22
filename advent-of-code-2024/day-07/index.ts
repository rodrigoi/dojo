export const parseEquations = (input: string) => {
  return input
    .split("\n")
    .map((line) => {
      const [testValue, numbers] = line.split(":");
      if (!testValue || !numbers) return null;

      return {
        result: parseInt(testValue),
        values: numbers.trim().split(" ").map(Number),
      };
    })
    .filter((equation) => equation !== null);
};

export const operations = [
  (a: number, b: number) => a + b,
  (a: number, b: number) => a * b,
];

export const isValidEquation =
  (operations: Array<(a: number, b: number) => number>) =>
  (result: number, values: number[]): boolean => {
    const possibleResults = getPossibleResults(operations)(values);
    return possibleResults.includes(result);
  };

export const getPossibleResults =
  (operations: Array<(a: number, b: number) => number>) =>
  (values: number[]): Array<number> => {
    const [a, b, ...rest] = values;

    if (rest.length === 0) {
      return operations.map((operation) => operation(a, b));
    }

    return operations.flatMap((operation) => {
      const partialResult = operation(a, b);
      return getPossibleResults(operations)([partialResult, ...rest]);
    });
  };

export const calculateCalibrationResults = (
  operations: Array<(a: number, b: number) => number>,
  equations: {
    result: number;
    values: number[];
  }[]
) => {
  return equations.reduce((acc, equation) => {
    if (isValidEquation(operations)(equation.result, equation.values)) {
      return acc + equation.result;
    }
    return acc;
  }, 0);
};

if (import.meta.main) {
  const input = await Bun.file("./advent-of-code-2024/day-07/input.txt").text();
  const equations = parseEquations(input);
  const partOneResult = calculateCalibrationResults(operations, equations);
  const partTwoResult = calculateCalibrationResults(
    [...operations, (a, b) => parseInt(`${a}${b}`)],
    equations
  );

  console.log(`The total calibration result is ${partOneResult}`);
  console.log(
    `The total calibration result with concatenations is ${partTwoResult}`
  );
}
