function hasBad(str: string) {
  if (!str) {
    return false;
  }
  let first3 = str[0]+ str[1] +str[2] === "bad";
  let second3 = str[1]+ str[2] +str[3] === "bad";

  return first3 || second3;

  //   if (!str) {
  //     return false;
  //   }
  //   return (
  //     (str[0] === "b" && str[1] === "a" && str[2] === "d") ||
  //     (str[1] === "b" && str[2] === "a" && str[3] === "d")
  //   );
}

let has1 = hasBad("badxx"); // true
let has2 = hasBad("xbadxx"); // true
let has3 = hasBad("xxbadxx"); // false

console.log(has1);
console.log(has2);
console.log(has3);
