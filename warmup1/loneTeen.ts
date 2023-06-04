function loneTeen (a: number, b: number) {
        return ((a <= 19 && a >= 13) !== (b <= 19 && b >= 13)) 
}
let result58 = loneTeen(13, 99) // true
let result59 = loneTeen(21, 19) // true
let result60 = loneTeen(13, 13) // false

console.log(result58)
console.log(result59)
console.log(result60)