function endOther(a: string, b: string) {
  if (a === b) {
    return true;
  }
  let aLength = 0;

  while (a[aLength] !== undefined) {
    aLength++;
  }
  let bLength = 0;
  while (b[bLength] !== undefined) {
    bLength++;
  }

  let i = aLength - 1; // last character of a
  let j = bLength - 1; // last character of b

  while (i >= 0 && j >= 0) {
    // to the beginning
    let lowA = a[i].toLowerCase(); //make them to lowerCase
    let lowB = b[j].toLowerCase();

    if (lowA !== lowB) {
      return false;
    }
    i--;
    j--;
    // if I reached the beginning return true
    if (i < 0 || j < 0 && lowA === lowB) {
      return true;
    }
  }
  
}

let endO1 = endOther("Hiabc", "abc"); // true
let endO2 = endOther("AbC", "HiaBc"); // true
let endO3 = endOther("abc", "abXabc"); // true

console.log(endO1);
console.log(endO2);
console.log(endO3);
