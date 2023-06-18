function countTriple(str: string): number {
  let index = 0;
  let counter = 0;

  while (str[index] !== undefined) {
    if (str[index] === str[index + 1] && str[index + 1] === str[index + 2]) {
      counter++;
    }

    index++;
  }
  return counter;
}

let tripLe1 = countTriple("abcXXXabc"); // 1
let tripLe2 = countTriple("xxxabyyyycd"); // 3
let tripLe3 = countTriple("a"); // 0

console.log(tripLe1);
console.log(tripLe2);
console.log(tripLe3);
