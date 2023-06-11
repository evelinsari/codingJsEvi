function altPairs (str:string) {
    let index = 0
    let result = ""

    while (str[index] !== undefined) {
        if (index % 2 === 0) {
            result += str[index]
            console.log("even - index: " + index + " result: " + result)
            index += 1
        } else {
            result += str[index]
            console.log("odd - index: " + index + " result: " + result)
            index += 3
        }
        console.log("-----------------------------------------")
    }

    return result
}

let pair1 = altPairs('kitten') // kien  01 23 45
let pair2 = altPairs('Chocolate') // Chole
let pair3 = altPairs('CodingHorror') // Congrr

console.log(pair1)
console.log(pair2)
console.log(pair3)