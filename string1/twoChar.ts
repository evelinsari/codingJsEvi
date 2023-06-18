function twoChar(str: string, num: number): string {
  if (str[num + 1] === undefined || num < 0) {
    return str[0] + str[1];
  }

  let index = 0;
  let chars = "";

  while (str[index] !== undefined) {
    if (str[index + 1] !== undefined && index === num) {
      chars += str[index] + str[index + 1];
    }
    index += 1;
  }

  return chars;
}
let two1 = twoChar("java", 0); // ja
let two2 = twoChar("java", 2); // va
let two3 = twoChar("java", 3); // ja

console.log(two1);
console.log(two2);
console.log(two3);
