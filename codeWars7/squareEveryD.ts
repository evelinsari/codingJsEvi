function squareDigits(num: number): number {
let squareDigits = ''
let stringNumbers = num.toString()

let i = 0

while (stringNumbers[i] !== undefined) {
    squareDigits += (+stringNumbers[i]) ** 2
    i++
}
return +squareDigits
}

let square1 = squareDigits(3212); // 9414

console.log(square1);

// Other solution of codewars: return +num.toString().split('').map(i => i*i).join('');


  