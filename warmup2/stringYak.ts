function stringYak(str:string): string {
    let index = 0
    let yaKi =""

    while (str[index] !== undefined) {
        if (str[index] === "y" && str[index+1] === "a" && str[index+2] === "k") {
           index += 3
        } else {
            yaKi += str[index]
            index += 1
        }
        
    }
    return yaKi
}

let yak1 = stringYak('yakpak')// pak
let yak2 = stringYak('pakyak') // pak
let yak3= stringYak('yak123ya')// 123ya

console.log(yak1)
console.log(yak2)
console.log(yak3)
