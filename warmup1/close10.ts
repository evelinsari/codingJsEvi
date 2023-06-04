function close10 (a:number, b: number): number {
    let diffA = a > 10 ? a - 10 : 10 - a
    let diffB = b > 10 ? b - 10 : 10 - b
    return diffA === diffB ? 0 : diffA > diffB ? b : a
}

let result73 = close10(8, 13) // 8
let result74 = close10(13, 8) // 8
let result75 = close10(13, 7) // 0

console.log(result73)
console.log(result74)
console.log(result75)