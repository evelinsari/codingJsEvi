function makeAbba(a: string, b: string) : string {
    return a + b + b + a 
}

let abba1 = makeAbba('Hi', 'Bye') // HiByeByeHi
let abba2 = makeAbba('Yo', 'Alice') // YoAliceAliceYo
let abba3 = makeAbba('What', 'Up') // WhatUpUpWhat

console.log(abba1)
console.log(abba2)
console.log(abba3)