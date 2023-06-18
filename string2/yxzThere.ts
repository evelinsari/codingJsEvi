function xyzThere(str: string) {
  if (str === "xyz") {
    return true;
  }

  let index = 0;
  if (str[0] + str[1] + str[2] === "xyz") {
    return true;
  }

  while (str[index] !== undefined) {
    if (
      str[index] !== "." &&
      str[index + 1] + str[index + 2] + str[index + 3] === "xyz"
    ) {
      return true;
    }

    index++;
  }

  return false;
}

let xyz1 = xyzThere("abcxyz"); // true
let xyz2 = xyzThere("abc.xyz"); // false
let xyz3 = xyzThere("xyz.abc"); // true

console.log(xyz1);
console.log(xyz2);
console.log(xyz3);
