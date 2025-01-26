export const _maxNumberOfBalloons = (text: string): number => {
  const word = "balloon";

  // bail if text does not have the right length
  if (text.length < word.length) {
    return 0;
  }

  // bail if text is already "balloons"
  if (text === word) {
    return 1;
  }

  // build a map for the word balloons
  const wordMap = new Map<string, number>([
    ["b", 1],
    ["a", 1],
    ["l", 2],
    ["o", 2],
    ["n", 1],
  ]);

  const textMap = new Map<string, number>();
  for (const char of text) {
    textMap.set(char, (textMap.get(char) || 0) + 1);
  }

  // bail if we don't have all the letters
  for (const key of wordMap.keys()) {
    if (!textMap.has(key) || textMap.get(key)! < wordMap.get(key)!) {
      return 0;
    }
  }

  // find the minimum number of balloons
  const min = Math.floor(
    Math.min(
      textMap.get("b")! / wordMap.get("b")!,
      textMap.get("a")! / wordMap.get("a")!,
      textMap.get("l")! / wordMap.get("l")!,
      textMap.get("o")! / wordMap.get("o")!,
      textMap.get("n")! / wordMap.get("n")!
    )
  );

  return min;
};

export const maxNumberOfBalloons = (text: string): number => {
  // build a frequency map for the letters in the word "balloon"
  const frequency = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  // filter the text to only include the letters in the word "balloon"
  const letters = text.split("").filter((letter) => "balon".includes(letter));

  // build the frequency map
  for (const char of letters) {
    frequency[char as keyof typeof frequency] =
      (frequency[char as keyof typeof frequency] || 0) + 1;
  }

  // divide the frequency of l and o by 2 because they appear twice in the word "balloon"
  frequency.l = Math.floor(frequency.l / 2);
  frequency.o = Math.floor(frequency.o / 2);

  // return the minimum number of balloons
  return Math.min(...Object.values(frequency));
};
