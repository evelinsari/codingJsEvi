function theEnd(str: string, front: boolean) {
  let index = 0;

  let firstO = str[0];

  while (str[index] !== undefined) {
    index += 1;
  }
  let lastO = str[index - 1];

  if (!front) {
    return lastO;
  }
  if (front) {
    return firstO;
  }
}

let end1 = theEnd("Hello", true); // H
let end2 = theEnd("Hello", false); // o
let end3 = theEnd("oh", true); // o

console.log(end1);
console.log(end2);
console.log(end3);
