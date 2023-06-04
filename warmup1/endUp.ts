
function endUp (str: string): string {
    let newWords = ""

    let index: number = 0
    while (str[index] !== undefined) {
        
        
        if (str[index+ 3] === undefined) {
            newWords += str[index].toUpperCase()
        } else {
            newWords += str[index] 
        }

        index +=1
    }
    return newWords
}

let result94 = endUp('Hello') // HeLLO
let result95 = endUp('hi there') // hi thERE
let result96 = endUp('hi') // HI

console.log(result94)
console.log(result95)
console.log(result96)