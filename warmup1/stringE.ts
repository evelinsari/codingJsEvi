/*function stingE (str: string): boolean {
    let index: number = 0
    
    let containE = ""
    while (str[index] !== undefined) {
        if (str[index] === "e") {
            containE += str[index]
            
        } 
        index += 1
    }
    return containE.length <= 3 && containE.length >= 1
}
*/
function stringE ( str:string): boolean {
    if (!str) {
        return false
    }

    let index: number = 0
    let count:number = 0

    while (str[index] !== undefined) {
        if (str[index] === "e") {
            count+=1
        }
        index+=1
    }
    return count <= 3 && count >= 1
}





let result82 = stringE('Hello') // true
let result83 = stringE('Heelle') // true
let result84 = stringE('Heelele') // false

console.log(result82)
console.log(result83)
console.log(result84)