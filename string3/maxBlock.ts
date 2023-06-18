function maxBlock(str: string): number {
  let count = 0;
  let maxCount = 0;
  let index = 0;

  while (str[index] !== undefined) {
    if (index === 0) {
      count++;
      maxCount++;
    }
    if (str[index] === str[index - 1]) {
      count++;
      if (maxCount < count) maxCount = count;
    } else {
      count = 1;
    }

    index++;
  }
  return maxCount;
}

let maxB1 = maxBlock("XXBBBBbbxx"); // 4
let maxB2 = maxBlock("abbCCCddBBBxx"); // 3
let maxB3 = maxBlock(" "); // 0

console.log(maxB1);
console.log(maxB2);
console.log(maxB3);
