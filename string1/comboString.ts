function comboString(a: string, b: string) {
  let length: number = 0;
  let aCounter = 0;
  let bCounter = 0;

  while (a[length] !== undefined) {
    length += 1;
    aCounter += 1;
  }

  length = 0;
  while (b[length] !== undefined) {
    length += 1;
    bCounter += 1;
  }
  if (aCounter > bCounter) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}

let combo1 = comboString("Hello", "hi"); // hiHellohi
let combo2 = comboString("Hi", "Hello"); // HiHelloHi
let combo3 = comboString("aaa", "b"); // baaab

console.log(combo1);
console.log(combo2);
console.log(combo3);
