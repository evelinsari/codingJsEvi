function gHappy(str:string) : boolean {
    let index = 0
    let counter = 0
    let counter2 = 0
    while (str[index] !== undefined) {
        if (str[index] === 'g') {
            counter++
           console.log(counter)
        }
        
        if ( str[index] + str[index + 1] + str[index + 2]=== 'ggg') {
            counter2 ++
            console.log(counter2)
        }

        index++
    }

    if ((counter + counter2) % 2 === 0  ) {
        return true
    }else {
        return false
    }
}

let gHap1 = gHappy('xxggxx') // true
let gHap2 = gHappy('xxgxx') // false
let gHap3 = gHappy('yyygggxyy') // false     

console.log(gHap1)
console.log(gHap2)
console.log(gHap3)