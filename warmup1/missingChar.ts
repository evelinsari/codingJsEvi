function missingChar (str: string, n: number ) : string {
    let index = 0

    let missing = ''
    while (str[index] !== undefined) {
       if (index !== n ) {
        missing += str[index]
       }
        index += 1
    }
    return missing
}

let result28 = missingChar( 'kitten', 1) //ktten
let result29 = missingChar( 'kitten', 0) //ktten
let result30 = missingChar( 'kitten', 4) //ktten

console.log(result28)
console.log(result29)
console.log(result30)

/*
function missingChar(str: string, n: number) {
    let result = "";
    for (let index = 0; index < str.length; index++) {
        if (index != n){
            result += str[index]
        }
 } 
 return  result
}

*/ 