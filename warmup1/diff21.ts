function diff21(n: number): number {
    if (n < 21) {
        return 21-n;
    } else {
        return (21-n) *2
    }
}

let result10 = diff21(19) //2
let result11 = diff21(10) //11
let result12 = diff21(21) //0

console.log(result10)
console.log(result11)
console.log(result12)

/*
function diff21(n){
  if (n < 21) {
  return 21-n;
  } else {
  return (n-21)*2}
}
*/ 