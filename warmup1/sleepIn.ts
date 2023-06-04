function sleepIn (weekday: boolean, vacation: boolean) : boolean {
    return !weekday || vacation
}


/*function sleepIn(weekday, vacation){
  if (!weekday || vacation) {
    return true;
  }else{
  return false;
  }
}*/


let result = sleepIn(true, true)
let result2 = sleepIn(true, false)
let result3 = sleepIn(false, true)

console.log(result)
console.log(result2)
console.log(result3)

