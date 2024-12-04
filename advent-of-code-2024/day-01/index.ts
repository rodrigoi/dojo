const input = await Bun.file("input.txt").text();

const numbers = input
  .trim()
  .split("\n")
  .map((line) => {
    const [num1, num2] = line.trim().split(/\s+/);
    return [parseInt(num1), parseInt(num2)];
  });

// Sort each column independently
const column1 = numbers.map((pair) => pair[0]).sort((a, b) => a - b);
const column2 = numbers.map((pair) => pair[1]).sort((a, b) => a - b);

// Combine the sorted columns back into pairs if needed
const sortedColumns = column1.map((num, index) => [num, column2[index]]);

const totalDistance = sortedColumns.reduce((sum, pair) => {
  return sum + Math.abs(pair[0] - pair[1]);
}, 0);

const similarity = column1.reduce((sum, num) => {
  return sum + Math.abs(num * column2.filter((n) => n === num).length);
}, 0);

console.log("Total distance:", totalDistance);
console.log("Similarity:", similarity);
