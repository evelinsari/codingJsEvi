function mixStart (str: string): boolean {
    let mix = str[1] ==="i" && str[2] === "x"
    if (!mix) {
        return false
    } else{
        return true
    }
}

let result64 = mixStart('mix snacks') // true
let result65 = mixStart('pix snacks') // true
let result66 = mixStart('piz snacks') // false

console.log(result64)
console.log(result65)
console.log(result66)