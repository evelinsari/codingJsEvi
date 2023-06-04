function last2(str:string): number {
   
    if (str[2] === undefined) {
        return 0
    }
    let length = 0

    while (str[length] !== undefined) {
        length += 1
    }
    let lastTwo = str[length - 2] + str[length - 1]

    let count = 0
    let index = 0

    while (str[index + 2] !== undefined) {
        if (str[index] + str[index + 1] === lastTwo) {
            count += 1
        }
        index += 1    
    }
    return count
}

let result113 = last2('hixxhi') // 1
let result114 = last2('xaxxaxaxx') // 1
let result115 = last2('axaaxx') // 1

console.log(result113)
console.log(result114)
console.log(result115)