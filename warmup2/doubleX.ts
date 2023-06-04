function doubleX (str: string): boolean {
    let index = 0

    while (str[index] !== undefined){
        if (str[index] === "x") {
            return (str[index+1] === "x")
            
        } index+=1 
    } return false    
}




let result106 = doubleX('axxbb') // true
let result107 = doubleX('axaxax') // false
let result108 = doubleX('xxxxx') // true

console.log(result106)
console.log(result107)
console.log(result108)











