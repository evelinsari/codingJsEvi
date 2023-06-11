function firstTwo(str:string): string {
    if (str[2] === undefined) {
        return str 
       } else {
        let two = str[0] + str[1] 
        return two
       } 
}

let first1 = firstTwo('Hello') // He
let first2 = firstTwo('abcdefg') // ab
let first3 = firstTwo('ab') // ab

console.log(first1)
console.log(first2)
console.log(first3)