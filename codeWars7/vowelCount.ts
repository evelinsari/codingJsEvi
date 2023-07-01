function getCount(str: string): number {
  let counter = 0;
  let i = 0;

  while (str[i] !== undefined) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
    i++;
  }
  return counter;
}

let getCount1 = getCount("abracadabra"); //

console.log(getCount1);

// codewars:
//function getCount(str) {
//    return (str.match(/[aeiou]/ig)||[]).length;
//}