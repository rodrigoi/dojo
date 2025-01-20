const input = await Bun.file("./advent-of-code-2024/day-05/input.txt").text();

type Rule = {
  before: number;
  after: number;
};

const [rulesSection, updatesSection] = input.trim().split("\n\n");

// Parse rules
const rules: Rule[] = rulesSection.split("\n").map((rule) => {
  const [before, after] = rule.split("|").map(Number);
  return { before, after };
});

// Parse updates
const updates = updatesSection
  .split("\n")
  .map((update) => update.split(",").map(Number));

export const isValidOrder = (update: number[], rules: Rule[]): boolean => {
  for (const rule of rules) {
    const beforeIndex = update.indexOf(rule.before);
    const afterIndex = update.indexOf(rule.after);

    // Skip rules where either number isn't in the update
    if (beforeIndex === -1 || afterIndex === -1) continue;

    // If after comes before before, the order is invalid
    if (afterIndex < beforeIndex) return false;
  }
  return true;
};

export const sortUpdate = (update: number[], rules: Rule[]): number[] => {
  return [...update].sort((a, b) => {
    // Check if there's a rule where a should come before b
    if (rules.some((rule) => rule.before === a && rule.after === b)) return -1;
    // Check if there's a rule where b should come before a
    if (rules.some((rule) => rule.before === b && rule.after === a)) return 1;
    return 0;
  });
};

const partOne = updates
  .filter((update) => isValidOrder(update, rules))
  .map((update) => {
    const middleIndex = Math.floor(update.length / 2);
    return update[middleIndex];
  })
  .reduce((sum, num) => sum + num, 0);

const partTwo = updates
  .filter((update) => !isValidOrder(update, rules))
  .map((update) => sortUpdate(update, rules)[Math.floor(update.length / 2)])
  .reduce((sum, num) => sum + num, 0);

console.log("Part 1 - Sum of middle numbers from valid updates:", partOne);
console.log("Part 2 - Number of valid orderings:", partTwo);
