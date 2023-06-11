function array271(nums: number[]) : boolean {
    let index = 0
    while (nums[index] !== undefined) {
        if (nums[index] === 2 && nums[index + 1] === 7 && nums[index +2] === 1) {
            return true
        }
        index += 1
    }

    return false
}




let arrayNum = array271([1,2,7,1]) // true
let arrayNum2 = array271([1,2,8,1]) // false
let arrayNum3 = array271([2,7,1]) // true


console.log(arrayNum)
console.log(arrayNum2)
console.log(arrayNum3)