function delDel (str: string) {
    let containDel = str[1] === "d" && str[2] === "e" && str[3] === "l"
    if (!containDel) {
        return str
    }
    let index = 0

    let newWord = ""
    while (str[index] !== undefined) {
        if (index !== 1 && index !== 2 && index !== 3) {
            newWord+= str[index]
        }
        index +=1
    }
    return newWord
}
let result61 = delDel('adelbc') // abc
let result62 = delDel('adelHello') // aHello
let result63 = delDel('abcdel') // abcdel

console.log(result61)
console.log(result62)
console.log(result63)


