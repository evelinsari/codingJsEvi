function doubleChar(str: string): string {
  let index = 0;
  let doubleWords = "";
  while (str[index] !== undefined) {
    doubleWords += str[index] + str[index];
    index++;
  }
  return doubleWords;
}

let double1 = doubleChar("The"); // TThhee
let double2 = doubleChar('AAbb') // AAAAbbbb
let double3 = doubleChar('Hi-There') // TThheerree

console.log(double1);
console.log(double2);
console.log(double3);
