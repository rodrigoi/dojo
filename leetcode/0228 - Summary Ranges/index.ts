/**
 * assume a sorted array is provided
 */
export const findSummaryRanges = (nums: number[]): string[] => {
  let range: [number, number?] = [nums[0], undefined];
  let ranges: [number, number?][] = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (next - current > 1) {
      ranges = [...ranges, range];
      range = [next, undefined];
      continue;
    }

    if (next === undefined) {
      ranges = [...ranges, range];
    }

    range = [range[0], next];
  }

  return ranges.map(([start, end]) =>
    end !== undefined ? `${start}->${end}` : start.toString()
  );
};
