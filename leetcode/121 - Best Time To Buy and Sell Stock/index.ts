export const maxProfit = (prices: number[]): number => {
  // initialize the minimum price to infinity
  let minPrice = Infinity;
  // initialize the maximum profit to 0
  let maxProfit = 0;

  // loop through the prices
  for (const price of prices) {
    // update the minimum price
    minPrice = Math.min(minPrice, price);
    // update the maximum profit
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};
