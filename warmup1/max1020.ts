function max1020(a: number, b: number): number {
   let isA = (a >= 10 && a <= 20)
   let isB = (b >= 10 && b <= 20)
   if (isA && !isB) {
    return a
   } if (!isA && isB){
    return b
   } if (!isA && !isB){
    return 0
   }
   return a > b ? a :b
   
}

let result79 = max1020(11, 19) // 19
let result80 = max1020(19, 11) // 19
let result81 = max1020(11, 9) // 11

console.log(result79)
console.log(result80)
console.log(result81)