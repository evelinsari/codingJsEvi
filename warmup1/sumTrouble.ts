function sumTrouble (a: number, b:number):number {
    if (a !== b) {
        return a+b
    } else {
        return (a+b)*2
    }
}

let result7 = sumTrouble(1,2) //3
let result8 = sumTrouble(3,2) //5
let result9 = sumTrouble(2,2) //8

console.log(result7)
console.log(result8)
console.log(result9)

/*
function sumDouble(a, b){
  if (a !== b) {
  return a+b;
  } else {
  return (a+b)*2;
  }
}
*/