export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const magazineMap = new Map<string, number>();

  // Count frequency of each character in magazine
  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  // Check if we can construct ransom note
  for (const char of ransomNote) {
    const count = magazineMap.get(char);
    if (!count) return false;
    magazineMap.set(char, count - 1);
  }

  return true;
};
