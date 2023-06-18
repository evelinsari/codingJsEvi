function middleTwo(str:string) {
    let length = 0

    while (str[length] !== undefined) {
        length += 1
    }

    if (length % 2 !== 0) {
        let index = (length - 1) / 2
        return str[index] + str[index + 1]
    } else  {
        let index = length / 2 - 1
        return str[index] + str[index + 1]
    }
}

let middle1 = middleTwo("string"); // ri
let middle2 = middleTwo("code"); // od
let middle3 = middleTwo("Practice"); // ct
let middle4 = middleTwo("Practiced"); // ct

console.log(middle1);
console.log(middle2);
console.log(middle3);
console.log(middle4);
