const input = await Bun.file("./advent-of-code-2024/day-03/input.txt").text();

const totalSum = (input: string): number => {
  const total = input
    .trim()
    .split("\n")
    .map((line) => {
      const matches = line.match(/mul\(\d+,\d+\)/g);
      return matches ? matches : [];
    })
    .map((matches) => {
      return matches.map((match) => {
        const [_, num1, num2] = match.match(/mul\((\d+),(\d+)\)/);
        return { num1: parseInt(num1), num2: parseInt(num2) };
      });
    });

  return total.reduce(
    (acc: number, matches: { num1: number; num2: number }[]) => {
      return (
        acc +
        matches.reduce(
          (acc: number, { num1, num2 }: { num1: number; num2: number }) => {
            return acc + num1 * num2;
          },
          0
        )
      );
    },
    0
  );
};

const totalSumEnabled = (input: string): number => {
  const total = input
    .trim()
    .split("\n")
    .map((line) => {
      const matches = line.match(/(do\(\)|don't\(\)|mul\(\d+,\d+\))/g);
      return matches ? matches : [];
    });

  let enabled = true;

  return total.reduce((acc: number, matches: string[]) => {
    return (
      acc +
      matches.reduce((acc: number, match: string) => {
        if (match === "do()") {
          enabled = true;
          return acc;
        } else if (match === "don't()") {
          enabled = false;
          return acc;
        } else if (enabled && match.startsWith("mul(")) {
          const [_, num1, num2] = match.match(/mul\((\d+),(\d+)\)/);
          return acc + parseInt(num1) * parseInt(num2);
        }
        return acc;
      }, 0)
    );
  }, 0);
};

console.log(`sum of all the multiplications: ${totalSum(input)}`);
console.log(
  `sum of all the multiplications when enabled: ${totalSumEnabled(input)}`
);
