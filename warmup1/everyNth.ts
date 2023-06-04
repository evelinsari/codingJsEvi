function everyNth (str: string, n: number):  string {
    let index = 0

    let nthWord = ""
    while (str[index] !== undefined) {
        if ( index % n === 0) {
            nthWord += str[index]
        }
        index+=1
    }
    return nthWord
}


let result91 = everyNth('Miracle', 2) // Mrce
let result92 = everyNth('abcdefg', 2) // aceg
let result93 = everyNth('abcdefg', 3) // adg

console.log(result91)
console.log(result92)
console.log(result93)