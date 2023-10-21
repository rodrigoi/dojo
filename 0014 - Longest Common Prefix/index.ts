/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * * 1 <= strs.length <= 200
 * * 0 <= strs[i].length <= 200
 * * strs[i] consists of only lowercase English letters.
 */

const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0)
      prefix = prefix.slice(0, prefix.length - 1);
  }

  return prefix;
};

const longestCommonPrefixBinarySearch = (strs: string[]): string => {
  if (strs.length === 0) return "";

  //returns the minimum length of the strings in the array
  const getMinLength = (strs: string[]): number => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < strs.length; i++) {
      min = Math.min(min, strs[i].length);
    }
    return min;
  };

  const isCommonPrefix = (strs: string[], length: number): boolean => {
    const str1 = strs[0].slice(0, length);
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(str1)) return false;
    }
    return true;
  };

  let minLen = getMinLength(strs);
  let low = 0;
  let high = minLen;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (isCommonPrefix(strs, middle)) low = middle + 1;
    else high = middle - 1;
  }

  return strs[0].slice(0, Math.floor((low + high) / 2));
};

export { longestCommonPrefix, longestCommonPrefixBinarySearch };
