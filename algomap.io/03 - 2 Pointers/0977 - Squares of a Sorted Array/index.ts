export const sortedSquares = (nums: number[]): number[] => {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};
