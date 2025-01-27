export const _findSummaryRanges = (nums: number[]): string[] => {
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

export const findSummaryRanges = (nums: number[]): string[] => {
  if (nums.length === 0) return [];

  const ranges: string[] = [];
  let start = 0; // Track the starting index instead of value

  for (let i = 1; i <= nums.length; i++) {
    // Check if we're at the end or if numbers aren't consecutive
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      // Add range to result
      ranges.push(
        start === i - 1
          ? nums[start].toString()
          : `${nums[start]}->${nums[i - 1]}`
      );
      // Start new range if not at the end
      if (i < nums.length) {
        start = i;
      }
    }
  }

  return ranges;
};
