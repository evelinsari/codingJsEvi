function countHi(str:string): number {
    let index = 0
    let counter = 0

    while (str[index] !== undefined) {
        if (str[index] + str[index + 1] === 'hi') {
            counter ++
        }
        index ++
    }
    return counter
}

let hi1 = countHi('abc hi ho') // 1
let hi2 = countHi('ABChi hi') // 2
let hi3 = countHi('hih') // 2

console.log()