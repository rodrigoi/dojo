export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }

  if (s === t) {
    return true;
  }

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  // Count frequency of each character in both strings
  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }
  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  for (const skey of sMap.keys()) {
    if (!tMap.has(skey) || sMap.get(skey) !== tMap.get(skey)) {
      return false;
    }
  }

  return true;

  return sMap
    .keys()
    .every((skey) => tMap.has(skey) && sMap.get(skey) === tMap.get(skey));
};
