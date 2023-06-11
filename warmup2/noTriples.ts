function noTriples (nums:number[]): boolean {
    let index = 0


    while (nums[index] !== undefined) {
        if (nums[index] === nums[index+1] && nums[index] === nums[index+2]) {
            return false
        } 
        index += 1
    }
    return true
}

let triple = noTriples([1,1,2,2,1]) // true
let triple2 = noTriples([1,1,2,2,2,1]) // false
let triple3 = noTriples([1,1,2,2,2,1]) // false

console.log(triple)
console.log(triple2)
console.log(triple3)