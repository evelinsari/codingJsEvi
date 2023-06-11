function nonStart(a: string, b: string): string {
  let index = 1;

  let aWord = "";
  let bWord = "";

  while (a[index] !== undefined) {
    aWord += a[index];
    index += 1;
  }

  index = 1;
  while (b[index] !== undefined) {
    bWord += b[index];
    index += 1;
  }

  return aWord + bWord;
}

let start1 = nonStart("Hello", "There"); // ellohere
let start2 = nonStart("java", "code"); // avaode
let start3 = nonStart("shotl", "java"); // hotlava

console.log(start1);
console.log(start2);
console.log(start3);
