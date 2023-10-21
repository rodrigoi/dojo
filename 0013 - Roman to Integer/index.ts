const romanHash: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let result = 0;
  let previous = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = romanHash[s[i]];
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }

    previous = current;
  }
  return result;
};

export default romanToInt;
