let myNumbers: number[] = [12, 2, 3, 105, 156, 607, 700, 12];
let myNumbers1: number[] = [9, 8, 2];
let myNumbers2: number[] = [];

function number10(array: number[]): number | null {
 
  let index = 0;

  while (array[index] !== undefined) {
    let element = array[index];
    let isWhatWeNeed = element > 10
    if (isWhatWeNeed) {
      
      return element;
    }

    index++;
  }
  return null;
}
let num10 = number10(myNumbers);
let num11 = number10(myNumbers1);
let num12 = number10(myNumbers2);

console.log(num10);
console.log(num11);
console.log(num12);



function find<Type>(array: Type[], seekingfunction: (x: Type) => boolean): Type | null {
 
    let index = 0;
  
    while (array[index] !== undefined) {
      let element = array[index];
      let isWhatWeNeed = seekingfunction(element) 
      if (isWhatWeNeed) {
        
        return element;
      }
  
      index++;
    }
    return null;
  }

  let  fi1 = find([0, 12, 30, 50], n =>  n > 10)
  let  fi2 = find(["alom", "buli", "bamba", "alma"], word =>  word[0] === 'a')
 console.log(fi1)
 console.log(fi2)