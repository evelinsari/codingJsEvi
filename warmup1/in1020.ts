function in1020 (a: number, b: number) {
    return (a >= 10 && a <= 20) || (b >= 10 && b <= 20 ) ? true : false
}

let result52 = in1020(12, 99) // true
let result53 = in1020(21, 12) // true
let result54 = in1020(8, 99) // false

console.log(result52)
console.log(result53)
console.log(result54)