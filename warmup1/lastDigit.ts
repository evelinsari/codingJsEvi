function lastDigit (a: number, b: number): boolean {
    return a % 10 === b % 10
}

let result85 = lastDigit(7, 17) // true
let result86 = lastDigit(6, 17) // false
let result87 = lastDigit(3, 113) // true

console.log(result85)
console.log(result86)
console.log(result87)