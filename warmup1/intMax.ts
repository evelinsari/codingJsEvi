function intMax (a: number, b: number, c: number): number {
    if ((a > b) && (a > c)) {
        return a
    } else if (b > a && b > c){
        return b
    } else {
        return c
    }

}

let result70 = intMax(1, 2, 3) // 3
let result71 = intMax(1, 3, 2) // 3
let result72 = intMax(3, 2, 1) // 3

console.log(result70)
console.log(result71)
console.log(result72)