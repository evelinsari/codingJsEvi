function nTwice(str: string, n: number) {
  let length = 0;

  while (str[length] !== undefined) {
    length += 1;
  }

  let index = 0;
  let fistPart = "";
  while (str[index] !== undefined) {
    if (index < n) {
      fistPart += str[index];
    }
    index += 1;
  }
  let lasPart = "";
  index = 0;
  while (str[index] !== undefined) {
    if (length - n <= index) {
      lasPart += str[index];
    }
    index += 1;
  }

  return fistPart + lasPart;
}

let twice = nTwice("hello", 2); // helo
let twice1 = nTwice("Chocolate", 3); // Choate
let twice2 = nTwice("Chocolate", 1); // Ce

console.log(twice);
console.log(twice1);
console.log(twice2);
