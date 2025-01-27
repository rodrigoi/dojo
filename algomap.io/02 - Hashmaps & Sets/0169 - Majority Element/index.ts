//Boyer-Moore Voting Algorithms
export const majorityElement = (nums: number[]): number => {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    if (candidate === nums[i]) {
      count++;
    }

    if (candidate !== nums[i]) {
      count--;
    }
  }

  return candidate;
};
