function frontTimes (str: string, n: number) {
    let first3 = str[2] === undefined ? str: str[0] + str[1] + str[2]

    let frontWord = ""
    let count: number = 1
    while (count <= n) {
        frontWord += first3
        count+=1
    }
   return frontWord
}

let result100 = frontTimes('Chocolate', 2) // ChoCho
let result101 = frontTimes('Chocolate', 3) // ChoChoCho
let result102 = frontTimes('Abc', 2) // AbcAbc

console.log(result100)
console.log(result101)
console.log(result102)

