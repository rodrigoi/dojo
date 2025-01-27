export const mergeIntervals = (intervals: number[][]): number[][] => {
  //sorting all intervals in place
  intervals.sort((a, b) => a[0] - b[0]);
  //initialize merge array
  let merged: number[][] = [];
  //for each interval, we check the boundaries with the previous one.
  for (const interval of intervals) {
    //if first, or it don't overlap, just push the interval into the array
    //otherwise, merge the intervals.
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      //upate the bouds of the current overlap
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  return merged;
};
