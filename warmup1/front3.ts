function front3 (str: string) {
   if (str[3] ===undefined) {
    return str +str +str
   } else {
    let copy = str[0] + str[1] + str[2]
    return copy + copy + copy
   } 
}

let result34 = front3('Java') // JavJAvJAv
let result35 = front3('Chocolate') // ChocChocChoc
let result36 = front3('abc') // abcabcabc

console.log(result34)
console.log(result35)
console.log(result36)