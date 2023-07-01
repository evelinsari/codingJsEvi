function patterN(n: number): string {
  let output = "";
  let i = 1;
  if (n < 1) return "";

  while (i <= n) {
    if (i === 1) output += "";
    if (i > 1) output += "\n";
    let j = 1;
    while (j <= i) {
      output += i;
      j++;
    }

    i++;
  }

  return output;
}

let pat1 = patterN(1); 
let pat2 = patterN(2); 
let pat3 = patterN(5); 

console.log(pat1);
console.log(pat2);
console.log(pat3);


/* Expected:
1
1
22
1
22
333
4444
55555 */
