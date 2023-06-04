function notString (str: string): string {
    return str[0] === 'n' && str[1] === 'o' && str[2] === 't' ? str : 'not ' + str
}

let result25 = notString('candy') // not candy
let result26 = notString('x') // not x
let result27 = notString('not bad') // not bad

console.log(result25)
console.log(result26)
console.log(result27)

   /* if (str[0] === 'n' && str[1] === 'o' && str[2] === 't') {
        return str
    } else {
        return 'not ' + str
    }*/