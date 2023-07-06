function countSmileys(arr: string[]) {
  if (arr.length === 0) return 0;
  let i = 0;
  let counter = 0;

  while (arr[i] !== undefined) {
    if (arr.length === 0) return 0;
    let i = 0;
    let counter = 0;
  
    while (arr[i] !== undefined) {
     if (arr[i].match(/^(:|;)(-|~)?(\)|D)$/) !== null) {
        counter++;
        console.log(counter);
      }
      i++;
    }
    return counter; {
      counter++;
      console.log(counter);
    }
    i++;
  }
  return counter;
}

let countSm1 = countSmileys([]) // 0
let countSm2 = countSmileys([";o> , ;~) , ;~) , ;> , :> , :~> , ;>"]); // 4
let countSm3 = countSmileys([':)',':(',':D',':O',':;']) //2
let countSm4 = countSmileys([';]', ':[', ';*', ':$', ';-D'])// 1

console.log(countSm1)
console.log(countSm2);
console.log(countSm3)
console.log(countSm4)
