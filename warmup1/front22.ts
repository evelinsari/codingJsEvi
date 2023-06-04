function front22 (str: string): string {
    let index = 0
      let repeat= ''
    while  (str[index] !== undefined) {
      if (index >= 1){
          repeat = str[0] + str[1]
          return repeat + str + repeat
      }
      index+=1
    } 
    return str + str + str
}



let result43 = front22('kitten') // kikittenki
let result44 = front22('Ha') // HaHaHa
let result45 = front22('abc') // ababcab

console.log(result43)
console.log(result44)
console.log(result45)