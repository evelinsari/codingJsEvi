function makes10 (a: number, b: number): boolean {
    return (a === 10 || b ===10) || a + b === 10
}

let result16 = makes10(9, 10) // true
let result17 = makes10(9, 9) // false
let result18 = makes10(1, 9) // true

console.log(result16)
console.log(result17)
console.log(result18)

/*
function makes10(a, b){
  if (a ===10 || b === 10 || (a+b) === 10) {
  return true;
  } else {
    return false;
  }
}
*/ 