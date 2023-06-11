function array123 (nums: number[]) {
    let index = 0

    while (nums[index] !== undefined) {
        if (nums[index] === 1 && nums[index +1] === 2 && nums[index+2] === 3) {
            return true 
        } if (nums[index] !== 1 && nums[index +1] !== 2 && nums[index+2] !== 3) {
            return false
        }
        index += 1
    }
    
}

let sequence1 = array123([1, 2, 3, 4, 5, 6]) // true
let sequence2 = array123([4, 5, 6, 1, 8, 3]) // false
let sequence3 = array123([11, 18, 19, 20, 1, 2, 3, 4, 5, 6]) // true

console.log(sequence1)
console.log(sequence2)
console.log(sequence3)
