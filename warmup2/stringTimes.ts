function  stringTimes(str: string, n: number): string {
    let count = 1
    let repeat = ""

    while (count <= n) {
        repeat += str
        count += 1
    }
    return repeat
}

let result97 = stringTimes('Hi', 2) // HiHi
let result98 = stringTimes('Hi', 3) // HiHiHi
let result99 = stringTimes('Hi', 1) // Hi

console.log(result97)
console.log(result98)
console.log(result99)
