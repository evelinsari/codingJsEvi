// You are going to be given a word. Your job is to return the middle character of the word. If the word's
// length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s: string) {
  let length = 0;

  while (s[length] !== undefined) {
    length++;
  }

  if (length % 2 === 0) {
    let i = length / 2;
    return s[i - 1] + s[i];
  }

  if (length % 2 !== 0) {
    let i = (length - 1) / 2;
    return s[i];
  }
}

let get1 = getMiddle("test"); // "es"
let get2 = getMiddle("testing"); // "t"
let get3 = getMiddle("middle"); // "dd"

console.log(get1);
console.log(get2);
console.log(get3);
