function withOutEnd2(str: string): string {
  let index = 0;

  while (str[index] !== undefined) {
    index += 1;
  }
  let lastChar = str[index - 1];
  let middle = "";
  index = 0

  while (str[index] !== undefined) {
    if (index !== 0 && str[index] !== lastChar) {
      middle += str[index];
    }
    index += 1;
  }
  return middle;
}

let wE1 = withOutEnd2("Hello"); // ell
let wE2 = withOutEnd2("abc"); // b
let wE3 = withOutEnd2("ab"); //

console.log(wE1);
console.log(wE2);
console.log(wE3);
