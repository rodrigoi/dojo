export const findClosestNumberToZero = (nums: number[]): number => {
  // mapping over each number and checking if it's closer to zero than the current closest
  return nums.reduce((acc, num) => {
    // if the current number is closer to zero than the current closest, return it
    if (Math.abs(num) < Math.abs(acc)) return num;
    // if the current number is the same distance from zero as the current closest
    // return the positive number
    if (Math.abs(num) === Math.abs(acc) && num > acc) return num;
    // otherwise, return the current closest
    return acc;
  }, nums[0]);
};
