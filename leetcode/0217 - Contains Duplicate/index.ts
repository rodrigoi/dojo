export const _containsDuplicate = (nums: number[]): boolean => {
  const start = performance.now();
  const numsSet = new Set(nums);
  const result = numsSet.size < nums.length;
  const end = performance.now();
  console.log(`Execution time: ${end - start}ms`);
  return result;
};

export const containsDuplicate = (nums: number[]): boolean => {
  let numsSet = new Set<number>();
  for (const num of nums) {
    if (numsSet.has(num)) {
      return true;
    }
    numsSet.add(num);
  }

  return false;
};
