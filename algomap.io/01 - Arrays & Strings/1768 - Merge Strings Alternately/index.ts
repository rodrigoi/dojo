export const mergeAlternately = (word1: string, word2: string): string => {
  // get the max length of the two words
  const maxLength = Math.max(word1.length, word2.length);
  // initialize the result string
  let result = "";

  // loop through the max length
  for (let i = 0; i < maxLength; i++) {
    // if the current index is less than the length of the first word,
    // add the current character to the result
    if (i < word1.length) result += word1[i];
    // if the current index is less than the length of the second word,
    // add the current character to the result
    if (i < word2.length) result += word2[i];
  }

  // return the result
  return result;
};
