// This would be O(n²)
export const naiveProductExceptSelf = (nums: number[]): number[] =>
  nums.map((_, index) =>
    [...nums.slice(0, index), ...nums.slice(index + 1)].reduce(
      (total, num) => total * num,
      1
    )
  );

// This would be O(n)
export const productExceptSelf = (nums: number[]): number[] => {
  const n = nums.length;
  const result = new Array(n);

  // First pass: Calculate products of all elements to the left
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second pass: Multiply by products of all elements to the right
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};
