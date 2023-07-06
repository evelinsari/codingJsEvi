function findOdd(xs: number[]): number {
  let listLength = 0;
  while (xs[listLength] !== undefined) {
    listLength++;
  }

  let finalNumber = 0;
  let i = 0;
  let itsOdd = false;
  while (i < listLength && !itsOdd) {
    let counter = 0;
    let j = 0;
    while (j < listLength) {
      if (xs[i] === xs[j]) {
        counter++;
      }
      j++;
    }
    if (counter % 2 !== 0) {
      finalNumber = xs[i];
      itsOdd = true;
    }
    i++;
  }
  return finalNumber;
}


/* cw solutions*/
/*export const findOdd = (xs: number[]): number => {
  return xs.find(a => xs.filter(b => b === a).length % 2 === 1) || 0;
};
  };*/

let example1 = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //5
let example2 = findOdd([1,1,1,1,1,1,10,1,1,1,1]) //10

console.log(example1)
console.log(example2)
