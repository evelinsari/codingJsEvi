function starOut(str:string) {
    let i = 0
    let newStar = ""
    while (str[i] !== undefined) {
        if (str[i] !== "*"  &&  str[i + 1] !== "*" && str[i - 1] !== "*") {
            newStar+= str[i]
        }
        i++
    }
    return newStar
}

let star1 = starOut('ab*cd') // ad
let star2 = starOut('ab**cd') // ad
let star3 = starOut('sm*eilly') // silly

console.log(star1)
console.log(star2)
console.log(star3)