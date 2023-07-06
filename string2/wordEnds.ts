function wordEnds(str: string, word: string) {
  let newEnd: string = "";
  let i: number = 0;
  let end: number = 0;

  while (i < str.length) { //5
    end = i + word.length;  //   2

    if (end > str.length) {
      end = str.length; 
    }
    if (str.substring(i, end) === word) {
      if (i > 0) {
        newEnd += str[i - 1];
      }
      if (i + word.length < str.length) {
        newEnd += str[end];
      }
    }
    i++;
  }
  return newEnd;
}

let ends1 = wordEnds("abcXY123XYijk", "XY"); // c13i
let ends2 = wordEnds('XY123XY', 'XY') // 13
let ends3 = wordEnds('XY1XY', 'XY') // 11

console.log(ends1);
console.log(ends2)
console.log(ends3)
