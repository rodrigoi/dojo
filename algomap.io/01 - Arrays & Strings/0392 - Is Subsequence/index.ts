export const isSubsequence = (s: string, t: string): boolean => {
  // initialize the index for s
  let sIndex = 0;
  // loop through t
  for (let i = 0; i < t.length; i++) {
    // if the current character of t matches the current character of s,
    // increment the index of s
    if (s[sIndex] === t[i]) sIndex++;
  }
  // return true if the index of s is equal to the length of s
  return sIndex === s.length;
};
