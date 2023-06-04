function arrayCount(nums: number[] ) : number {
        let index = 0

        let counter = 0
        while (nums[index] !== undefined) {
            if (nums[index] === 9) {
                counter+= 1
            }

            index += 1
        }
        return counter
}

let numberOf9a = arrayCount([1, 2, 9]) // 1
let numberOf9b = arrayCount([1, 9, 9]) //2
let numberOf9c = arrayCount([1, 9, 9, 3, 9]) // 3

console.log(numberOf9a)
console.log(numberOf9b)
console.log(numberOf9c)