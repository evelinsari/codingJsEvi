function stringBits (str:string): string {
    let index = 0

    let newWord = ""

    while (str[index] !== undefined) {
        newWord += str[index]
        index+=2
    }
    return newWord
}

let result109 = stringBits('Hello') // Hlo
let result110 = stringBits('Hi') // H
let result111 = stringBits('Heeololeo') // Hello

console