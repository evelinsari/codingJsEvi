function makeOutWord(out: string, word: string): string {
    return out.substring(0, 2) + word + out.substring(2, 4);
}

let out1 = makeOutWord('<<>>', 'Yay') // <>
let out2 = makeOutWord('<<>>', 'Woohoo') // <>
let out3 = makeOutWord('abyz', 'YAY') // [[word]]

console.log(out1)
console.log(out2)
console.log(out3)