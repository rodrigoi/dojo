const isValidSequence = (report: number[]) => {
  if (report.length < 2) return false;
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < report.length; i++) {
    const diff = report[i] - report[i - 1];

    // Check if difference is within valid range (1-3)
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    // If difference is negative, sequence can't be increasing
    if (diff < 0) {
      increasing = false;
    }

    // If difference is positive, sequence can't be decreasing
    if (diff > 0) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
};

const input = await Bun.file("input.txt").text();

const reports = input
  .trim()
  .split("\n")
  .map((line) => {
    return line.split(" ").map(Number);
  });

const validSequences = reports.filter(isValidSequence);

console.log(`Number of valid sequences: ${validSequences.length}`);
