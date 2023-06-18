function squirrelPlay(temp: number, isSummer: boolean): boolean {
    if (!isSummer && (temp >= 60 && temp <= 90) || isSummer && (temp >= 60 && temp <= 100)  ) {
        return true
    } else {
        return false
    }
}

let play1 = squirrelPlay(70, false) // true
let play2 = squirrelPlay(95, false) // false
let play3 = squirrelPlay(70, true) // true

console.log(play1)
console.log(play2)
console.log(play3)