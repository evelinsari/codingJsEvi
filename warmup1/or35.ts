function or35 (n: number) {
    if (n % 3 === 0 || n % 5 === 0 ) {
        return true 
    } else {
        return false
    }
}

let result40 = or35(3) // true
let result41 = or35(10) // true
let result42 = or35(8) // false

console.log(result40)
console.log(result41)
console.log(result42)