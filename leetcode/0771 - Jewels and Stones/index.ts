export const numJewelsInStones = (jewels: string, stones: string): number => {
  const jewelsSet = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (jewelsSet.has(stone)) {
      count++;
    }
  }

  return count;
};
