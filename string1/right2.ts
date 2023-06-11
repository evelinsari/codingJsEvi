function right2(str: string) {
    let index = 0

    let firstPart = ""
    let secondPart = ""

    while (str[index] !== undefined) {
        if (str[index + 3] === undefined && str[index + 2] === undefined) {
            firstPart += str[index]
        } if (str[index + 2] !== undefined && str[index + 1] !== undefined) {
            secondPart += str[index]
        }
        index += 1
    }
    return firstPart + secondPart
}

let rightRo1 = right2('Hello') // loHel
let rightRo2 = right2('java') // vaja
let rightRo3 = right2('Hi') // Hi