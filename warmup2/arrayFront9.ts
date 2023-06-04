function arrayFront9(nums:number[]) : boolean{
    return (nums[0] === 9 )|| (nums[1] === 9)|| (nums[2] === 9) ||( nums[3] === 9) ? true: false
}

let front1 = arrayFront9([1, 2, 9, 3, 4]) //true
let front2 = arrayFront9([1, 2, 3, 4, 9]) //false
let front4 = arrayFront9([1, 2, 3, 4, 5]) //false

console.log(front1)
console.log(front2)
console.log(front4)