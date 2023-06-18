function middleThree(str: string) {
  let length = 1;

  while (str[length] !== undefined) {
    length += 1;
  }
  if (length < 3) {
    return str;
  }
  if (length % 2 !== 0) {
    let index = (length - 1) / 2 - 1;

    return str[index] + str[index + 1] + str[index + 2];
  }
}

let mid1 = middleThree("Candy"); // and
let mid2 = middleThree("and"); // and
let mid3 = middleThree("solving"); // lvi

console.log(mid1);
console.log(mid2);
console.log(mid3);
