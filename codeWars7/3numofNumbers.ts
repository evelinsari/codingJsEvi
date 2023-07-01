function getSum(a: number, b: number): number {
  if (a > b) {
    return ((a - b + 1) * (b + a)) / 2;
  } else if (b > a) {
    return ((b - a + 1) * (a + b)) / 2;
  } else {
    return a;
  }
}

let getS1 = getSum(0, -1); // -1
let getS2 = getSum(-1, 2); // 2
console.log(getS1);
console.log(getS2);


// solution of codewars: 
//const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//    max = Math.max(a, b);
//return (max - min + 1) * (min + max) / 2;
//}
