function startHi (str:string) {
    return str[0] === 'h' && str[1] === 'i' ? true : false
}

let result46 = startHi('hi there') // true
let result47 = startHi('hi') // true
let result48 = startHi('hello hi') // false

console.log(result46)
console.log(result47)
console.log(result48)
