export const isValidSudoku = (board: string[][]): boolean => {
  // Check rows
  for (let row = 0; row < 9; row++) {
    const seen = new Set<string>();
    for (let col = 0; col < 9; col++) {
      const value = board[row][col];
      if (value === ".") continue;
      if (seen.has(value)) return false;
      seen.add(value);
    }
  }

  // Check columns
  for (let col = 0; col < 9; col++) {
    const seen = new Set<string>();
    for (let row = 0; row < 9; row++) {
      const value = board[row][col];
      if (value === ".") continue;
      if (seen.has(value)) return false;
      seen.add(value);
    }
  }

  // Check 3x3 boxes
  for (let box = 0; box < 9; box++) {
    const seen = new Set<string>();
    const rowStart = Math.floor(box / 3) * 3;
    const colStart = (box % 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const value = board[rowStart + i][colStart + j];
        if (value === ".") continue;
        if (seen.has(value)) return false;
        seen.add(value);
      }
    }
  }

  return true;
};
