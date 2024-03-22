/**
 * Difficulty: Medium
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 * 0 <= s.length <= 5 * 104
 * s consists of English letters, digits, symbols and spaces.
 */

const lengthOfLongestSubstring = (s: string): number => {
  const map = new Map<string, number>();
  let left = 0;
  let max = 0;

  for (let right = 0; right < s.length; right++) {
    //if the character is already in the map,
    //move the left pointer to the right of the same character last found
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right])! + 1);
    }
    //add the character to the map
    map.set(s[right], right);
    //update the max
    max = Math.max(max, right - left + 1);
  }

  return max;
};

export { lengthOfLongestSubstring };
