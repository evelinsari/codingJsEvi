function posNeg(a:number, b:number, negative: boolean) : boolean {
    if (((a > 0 && b < 0)  || (b > 0 && a < 0 )) && !negative) {
        return true
    } else if (negative && (a < 0 && b < 0)) {
        return true
    } else {
        return false
    }
}

let result22 = posNeg(1, -1, false) // true
let result23 = posNeg(-1, 1, false) // true
let result24 = posNeg(-4, -5, true) // true

console.log(result22)
console.log(result23)
console.log(result24)


