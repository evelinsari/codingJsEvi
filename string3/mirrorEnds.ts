function mirrorEnds(str: string): string {
  let length = 0;

  while (str[length] !== undefined) {
    length++;
  }

  let i = 0;
  let j = length - 1; // last one

  let mirror = "";
  while (str[i] !== undefined) {
    if (str[i] === str[j]) mirror += str[i];
    i++;
    j--;
    if (str[i] !== str[j]) return mirror;
  }
  return mirror;
}

let mirror1 = mirrorEnds("abXYZba"); // ab
let mirror2 = mirrorEnds("abca"); // a
let mirror3 = mirrorEnds("aba"); // aba

console.log(mirror1);
console.log(mirror2);
console.log(mirror3);
