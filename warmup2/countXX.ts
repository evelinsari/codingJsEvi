function countXX(str: string) {

    let index = 0

    let counter = 0
    while (str[index] !== undefined) {
        if ((str[index] + str[index+1]) === "xx") {
            counter += 1
        } 
        index+=1
    }
    return counter
}

let result103 = countXX('abcxx') //1
let result104 = countXX('xxx') //2
let result105 = countXX('xxxx') //3

console.log(result103)
console.log(result104)
console.log(result105)