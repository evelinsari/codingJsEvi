function extraEnd(str:string) {
    let length = 0

    while (str[length] !== undefined) {
        length += 1
    }
    let lastTwo = str[length - 2] + str[length - 1]

    return lastTwo + lastTwo + lastTwo
}

let extra1 = extraEnd('Hello') // lololo
let extra2 = extraEnd('ab') // ababab
let extra3 = extraEnd('Hi') // HiHiHi

console.log(extra1)
console.log(extra2)
console.log(extra3)