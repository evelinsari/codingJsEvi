function withOutEnd(str:string): string {
    let index = 0
    let middleOnes = ''
   

    while (str[index] !== undefined) {
        if (index !== 0 && str[index + 1] !== undefined) {
            middleOnes += str[index]
        } 
        index += 1
    }
    return middleOnes
}

let outW = withOutEnd('Hello') // ell
let outW2 = withOutEnd('java') // av
let outW3 = withOutEnd('coding') // odin

console.log(outW)
console.log(outW2)
console.log(outW3)