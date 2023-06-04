function nearHundred (n: number) : boolean {
    return  90 <= n && n <= 110 || 190 <= n 
}

let result19 = nearHundred(93) //true
let result20 = nearHundred(90) //true
let result21 = nearHundred(89) //false

console.log(result19)
console.log(result20)
console.log(result21)

/*
function nearHundred(n){
  if (n < 90 || (n > 110 && n < 190) ){
  return false;
  } else {
  return true;
  }
}
 */