function digitalRoot(n: number) {
  let stringNumbers = n.toString();
  let digitalNumbers = 0;
  let result = 0;
  let i = 0;
  while (stringNumbers[i] !== undefined) {
    digitalNumbers += parseInt(stringNumbers.charAt(i));
    result = digitalNumbers;
    if (digitalNumbers > 9) {
      let temporary = digitalNumbers.toString();
      result = 0;
      result = temporary.split("").map(Number).reduce((a, b)=> a + b, 0);
    }
    if (result > 9) {
      let temporary2 = result.toString();
      result = 0;
      result = temporary2.split("").map(Number).reduce((a, b) => a + b, 0);
    }
    i++;
  }
  return result;
}

let ind1 = digitalRoot(591769); //1
console.log(ind1);
