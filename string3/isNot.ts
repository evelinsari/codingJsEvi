function notReplace (str: string): string {
    let i = 0
    let newStr = ""

    while (str[i] !== undefined) {
        newStr+= str[i]
        if (str[0] + str[1] === "is") {
            newStr+= "is  not"
        }
        i++
    }
return newStr
}

let rep1 = notReplace('is test') //is not test
let rep2 = notReplace('is-is') //is not - is not
let rep3 = notReplace('This is right') //This is not right

console.log(rep1)
console.log(rep2)
console.log(rep3)
