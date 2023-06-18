function bobThere(str: string):boolean {
let index = 0

while (str[index] !== undefined) {
    if (str[index] === 'b' && str[index +2] === 'b') {
        return true
    }

    index ++
}
    return false
}

let bob1 = bobThere('abcbob') // true
let bob2 = bobThere('b9b') // true
let bob3 = bobThere('bac') // false

console.log(bob1)
console.log(bob2)
console.log(bob3)