function equalIsNot(str:string): boolean {
    let index = 0
    let counter = 0
    
    while (str[index] !== undefined) {
        if (str[index]=== 'n' && str[index + 1] === 'o' && str[index + 2] === 't') {
            counter ++
        }

        index ++
    }

    
    let counter2= 0
    index = 0
    while (str[index] !== undefined) {
        if (str[index] === 'i' && str[index + 1] === 's') {
            counter2 ++
        }
        console.log('----------------' + counter2)
        index ++
    }
    if (counter === counter2) {
        return true
    } else {
        return false
    }
}

let equal1 = equalIsNot('This is not') // false
let equal2 = equalIsNot('This is notnot') // true
let equal3 = equalIsNot('noisxxnotyynotxisi') // true

console.log(equal1)
console.log(equal2)
console.log(equal3)