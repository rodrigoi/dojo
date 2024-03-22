/**
 * Difficulty: Easy
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Constraints:
 *
 * -2^31 <= x <= 2^31 - 1
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

const isPalindrome = (x: number): boolean => {
  //zero is always false
  if (x < 0) return false;

  //reverse the number
  let reversed = 0;
  let temp = x;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  //check if the reversed number is equal to the original number
  return reversed === x;
};

export default isPalindrome;
