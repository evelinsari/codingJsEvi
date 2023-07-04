function sumNumbers(str: string): number  {
  if (!str) return 0;

  let index = 0;
  let total: RegExpMatchArray | null = str.match(/\d+/g);
  console.log(total);
  let sumNum: number = 0;

  if (total !== null) {
    while (total[index] !== undefined) {
      sumNum += +total[index];
      index++;
    }
  }
  return sumNum;
}

let sum1 = sumNumbers("abc123xyz"); // 123
let sum2 = sumNumbers("aa11b33"); //44
let sum3 = sumNumbers("7 11"); //18

console.log(sum1);
console.log(sum2);
console.log(sum3);
