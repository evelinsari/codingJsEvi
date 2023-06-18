function sumDigits(str: string): number {
  let index = 0;
  let total = 0;

  while (str[index] !== undefined) {
    if (str[index].toLowerCase() == str[index].toUpperCase()) {
      total += +str[index];
    }
    index++;
  }
  return total;
}
let sumD1 = sumDigits("aa1bc2d3"); // 6
let sumD2 = sumDigits("aa11b33"); // 8
let sumD3 = sumDigits("Chocolate"); // 0

console.log(sumD1);
console.log(sumD2);
console.log(sumD3);
