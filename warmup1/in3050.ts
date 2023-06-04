function in3050 (a: number, b: number): boolean {
    let range34 = (a >= 30 && a <= 40) && (b >= 30 && b <= 40)
    let range45 = (a >= 40 && a <= 50) && (b >= 40 && b <= 50)
    if (range34 || range45) {
        return true
    } else {
       return false
    }
}

let result76 = in3050(30, 31) // true
let result77 = in3050(30, 41) // false
let result78 = in3050(40, 50) // true

console.log(result76)
console.log(result77)
console.log(result78)