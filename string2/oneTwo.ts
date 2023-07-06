function oneTwo(str: string) {
  let i = 0;
  let newOneTwo = "";

  if (str.length === 2) {
    return "";
  }

  while (str[i] !== undefined) {
    if (i % 3 === 0 && i + 2 < str.length) {
      newOneTwo += str[i + 1] + str[i + 2] + str[i];
    }

    i++;
  }

  return newOneTwo;
}

let ot1 = oneTwo("abc"); // bca
let ot2 = oneTwo("tca"); // cat
let ot3 = oneTwo("tcagdo"); // catdog

console.log(ot1);
console.log(ot2);
console.log(ot3);
