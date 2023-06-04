function backAround(str: string) {
  let index = 0

    while (str[index] !== undefined) {
        if (str[index+1] === undefined) {
        let lastOne = str[index]
        
        return lastOne + str + lastOne
        }  
        index +=1
    }
}


let result37 = backAround('cat') // tcatt
let result38 = backAround('Hello') // oHello
let result39 = backAround('a') // aaa   

console.log(result37)
console.log(result38)
console.log(result39)


