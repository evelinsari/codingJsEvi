function startOz(str: string) {
  let oz =str[0] === "o" || str[1] === "z"
  if (!oz) {
    return ""
  }
  let index: number = 0
  
  while (str[index] !== undefined) {
    if (str[0] === "o" && str[1] === "z") {
        return "oz"
    } else if (str[0] === "o") {
        return "o"
    } else {
        return "z"
        
    }
    index+= 1
  } 
}

let result67 = startOz('ozymandias') // oz
let result68 = startOz('bzoo') // z
let result69 = startOz('oxx') // o

console.log(result67)
console.log(result68)
console.log(result69)