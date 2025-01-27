export const longestConsecutive = (nums: number[]): number => {
  if (nums.length === 0) {
    return 0;
  }
  const numbers = new Set(nums);
  const sorted = Array.from(numbers).sort((a, b) => a - b);

  let candidate = 1;
  let maxLength = 1;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1] + 1) {
      maxLength = Math.max(maxLength, candidate);
      candidate = 0;
    }

    candidate++;
  }

  return Math.max(maxLength, candidate);
};
