function endsLy(str: string) {
  if (!str) {
    return false;
  }
  let length = 0;

  while (str[length] !== undefined) {
    length += 1;
  }

  let lastTwoChar = str[length - 2] + str[length - 1];

  return lastTwoChar === "ly";
}

let endl1 = endsLy("oddly"); // true
let endl2 = endsLy("y"); // false
let endl3 = endsLy("oddl"); // false

console.log(endl1);
console.log(endl2);
console.log(endl3);
