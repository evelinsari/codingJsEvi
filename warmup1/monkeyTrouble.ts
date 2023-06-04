function monkeyTrouble(aSmile :boolean , bSmile: boolean) : boolean {
 return aSmile === bSmile 
}

let result4 = monkeyTrouble(true,true)
let result5 = monkeyTrouble(false,false)
let result6 = monkeyTrouble(true,false)


console.log(result4)
console.log(result5)
console.log(result6)

/*
function monkeyTrouble(aSmile:boolean, bSmile:boolean){
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
}
*/ 
