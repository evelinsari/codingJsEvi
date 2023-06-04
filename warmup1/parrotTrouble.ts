function parrotTrouble (talking: boolean, hour: number, ): boolean {
    return (talking && (hour < 7 || hour > 20)) 
}

let result13 = parrotTrouble(true, 6) // true
let result14 = parrotTrouble(true, 7) // false
let result15 = parrotTrouble(false, 6) // false

console.log(result13)
console.log(result14)
console.log(result15)