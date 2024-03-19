/**
 * Difficulty: Medium
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */
const longestPalindrome = (s: string) => {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    //expand around the center
    const current1 = expandAroundCenter(s, i, i);
    //expand around the center + 1
    const current2 = expandAroundCenter(s, i, i + 1);
    //get the longest between the two
    const currentLongest =
      current1.length > current2.length ? current1 : current2;
    //update the longest
    longest = currentLongest.length > longest.length ? currentLongest : longest;
  }
  return longest;
};

const expandAroundCenter = (s: string, left: number, right: number): string => {
  //while the left and right are valid and the characters are the same
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    //expand the window
    left--;
    right++;
  }
  //return the substring
  return s.slice(left + 1, right);
};

export { longestPalindrome };
