function hasTeen (a: number, b: number, c: number): boolean {
    return (a <= 19 && a >= 13) || (b <= 19 && b >= 13) || (c <= 19 && c >= 13) ? true : false
}

let result55 = hasTeen(13, 20, 10) // true
let result56 = hasTeen(20, 19, 10) // true
let result57 = hasTeen(20, 10, 13) // true

console.log(result55)
console.log(result56)
console.log(result57)