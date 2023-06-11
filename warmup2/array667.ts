function array667(nums: number[]): number {
  let index = 0;
  let counter = 0;

  while (nums[index] !== undefined) {
    if (nums[index] === 6 && nums[index+1] === 6 || nums[index] === 6 && nums[index+1] === 7) {
    counter+= 1
    }
    index += 1
  }

  return counter
}

let array = array667([6, 6, 2]); // 1
let array2 = array667([6, 6, 2, 6]); // 1
let array3 = array667([6, 7, 2, 6]); // 1

console.log(array)
console.log(array2)
console.log(array3)