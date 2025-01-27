export const groupAnagrams = (strs: string[]) => {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    // Sort the string to get the key
    const sorted = str.split("").sort().join("");
    // Add the string to the map
    // If the key already exists, add the string to the array
    // If the key does not exist, create a new array with the string
    map.set(sorted, [...(map.get(sorted) || []), str]);
  }

  return Array.from(map.values());
};
