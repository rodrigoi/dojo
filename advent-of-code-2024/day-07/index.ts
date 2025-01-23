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

type Operation = (a: number, b: number) => number;

export const getStandardOperations = (): Operation[] => [
  (a: number, b: number) => a + b,
  (a: number, b: number) => a * b,
];

export const isValidEquation = (
  result: number,
  values: number[],
  operations: Operation[] = getStandardOperations()
): boolean => {
  const possibleResults = getPossibleResults(values, operations);
  return possibleResults.includes(result);
};

export const getPossibleResults = (
  values: number[],
  operations: Operation[]
): Array<number> => {
  const [a, b, ...rest] = values;

  if (rest.length === 0) {
    return operations.map((operation) => operation(a, b));
  }

  return operations.flatMap((operation) => {
    const partialResult = operation(a, b);
    return getPossibleResults([partialResult, ...rest], operations);
  });
};

export const calculateCalibrationResults = (
  equations: {
    result: number;
    values: number[];
  }[],
  operations: Operation[]
) => {
  return equations.reduce((acc, equation) => {
    if (isValidEquation(equation.result, equation.values, operations)) {
      return acc + equation.result;
    }
    return acc;
  }, 0);
};

if (import.meta.main) {
  const input = await Bun.file("./advent-of-code-2024/day-07/input.txt").text();
  const equations = parseEquations(input);
  const operations = getStandardOperations();

  const partOneResult = calculateCalibrationResults(equations, operations);
  const partTwoResult = calculateCalibrationResults(equations, [
    ...operations,
    (a, b) => parseInt(`${a}${b}`),
  ]);

  console.log(`The total calibration result is ${partOneResult}`);
  console.log(
    `The total calibration result with concatenations is ${partTwoResult}`
  );
}
