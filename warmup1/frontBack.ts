function frontBack (str:string) {
    let index = 1

    let firstLetter = ''
    let lastLetter = str[0]
    let middle = ''

    while (str[index] !== undefined) {
        if (str[index+1] !== undefined) {
            middle += str[index]
        } else {
           firstLetter = str[index]
        }
        index+=1
    }

    return firstLetter + middle + lastLetter
}

let result31 = frontBack('code') //eodc
let result32 = frontBack('a') // a
let result33 = frontBack('ab') //ba

console.log(result31)
console.log(result32)
console.log(result33)

/*
function frontBack(str: string){
    if (str.length === 1 || !str) {
        return str;
    }

    let firstLetter = str[0];
    let lastLetter = str[str.length - 1]
    let middle = "";
    for (let index = 0; index < str.length; index++) {
        if (index !== 0 && index !== str.length - 1) {
            middle += str[index] 
        }
    }

    return lastLetter + middle + firstLetter;
} */