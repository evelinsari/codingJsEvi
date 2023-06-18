function countCode(str: string): number {
  let index = 0;
  let counter = 0;

  while (str[index] !== undefined) {
    if (str[index] + str[index + 1] === "co" && str[index + 3] === "e") {
      counter++;
    }
    index++;
  }
  return counter;
}

let count1 = countCode("aaacodebbb"); // 1
let count2 = countCode("codexxcode"); // 2
let count3 = countCode("cozexxcope"); // 2

console.log(count1);
console.log(count2);
console.log(count3);
