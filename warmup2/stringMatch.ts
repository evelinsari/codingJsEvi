function stringMatch (a: string, b: string): number {
    let index = 0

    let counter = 0


    while ((a[index+1] !== undefined) || (b[index+1] !==undefined)) {
        if ((a[index] + a[index+1]) === (b[index] + b[index+1])) {
            counter += 1
        }
        index += 1
    }
    return counter
}

let posNum1 = stringMatch('xxcaazz', 'xxbaaz') // 3
let posNum2 = stringMatch('abc', 'abc') // 2
let posNum3 = stringMatch('abc', 'axc') // 0

console.log(posNum1)
console.log(posNum2)
console.log(posNum3)
