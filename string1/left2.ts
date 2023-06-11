function  left2(str: string): string {
    let index = 0

    let restOfThem = ""

    while (str[index] !== undefined) {
        if (index !== 0 && index !== 1) {
            restOfThem += str[index]
        }
        index += 1
    }
    return restOfThem + str[0] + str[1]
}

let rotated1 = left2('Hello') // lloHe
let rotated2 = left2('java') // vaja
let rotated3 = left2('Hi') // Hi


console.log(rotated1)
console.log(rotated2)
console.log(rotated3)