/**
 * Difficulty: Easy
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Constraints:
 * * 1 <= s.length <= 104
 * * s consists of parentheses only '()[]{}'.
 */

const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    //if it's an opening bracket, push the closing bracket to the stack
    if (map[s[i]]) stack.push(map[s[i]]);
    //if it's a closing bracket, pop the last element from the stack and compare
    else if (s[i] !== stack.pop()) return false;
  }

  //if the stack is empty, it's valid
  return stack.length === 0;
};

export { isValid };
