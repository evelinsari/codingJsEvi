function icyHot (temp1: number, temp2: number) {
    return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0) ? true : false
}

let result49 = icyHot(120, -1) // true
let result50 = icyHot(-1, 120) // true
let result51 = icyHot(2, 120) // false

console.log(result49)
console.log(result50)
console.log(result51)