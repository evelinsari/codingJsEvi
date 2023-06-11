function stringX(str:string): string {
    if (!str ) {
        return  ''
    } 

    let index = 1
    let withOut = ''

    if (str[0] === 'x' &&str[index] === undefined) {
        str += str
        return str
    }

    while (str[index] !== undefined) {
        if (str[index] !== 'x') {
            withOut += str[index]
        } else if (str[index + 1] === undefined) {
            withOut += str[index]
        } 

        index += 1
    }
        return str[0] + withOut
} 

let with1 = stringX('xxHix')// xHix
let with2 = stringX('abxxxcd') // abcd
let with3 = stringX('xabxxxxcdx')// xabcdx

console.log(with1)
console.log(with2)
console.log(with3)


