let number5List: number[] = [1, 2, 3, 10, 15, 60, 70, 12];

function num5(numbers: number[]): boolean {
  let index = 0;

  while (numbers[index] !== undefined) {
    let num = numbers[index];

    if (num <= 5) {
      return false;
    }

    index++;
  }

  return true;
}

let res5 = num5(number5List);
console.log(res5);

let stringList: string[] = ["alma", "körte", "barack", "kamu", "kisautó"];
let stringList2: string[] = ["ma", "körte", "barack", "kamra", "autó"];
let stringList3: string[] = ["kalom", "kör", "kbarack", "kamu", "kicsi"];

function stringK(string: string[]): boolean {
  let index = 0;

  while (string[index] !== undefined) {
    let str = string[index];

    if (str[0] !== "k") {
      return false;
    }
    index++;
  }
  return true;
}

let res6 = stringK(stringList);
let res7 = stringK(stringList2);
let res8 = stringK(stringList3);
console.log(res6);
console.log(res7);
console.log(res8);

let res9 = stringList.filter((char) => char[0] !== "k");
console.log(res9);

let every = <Type>(arr: Type[], valiDate: (elem: Type) => boolean): boolean => {
  let index = 0;
  while (arr[index] !== undefined) {
    let isValid = valiDate(arr[index]);
    if (!isValid) {
      return false;
    }

    index++;
  }

  return true;
};

let startWithK = (word: string): boolean => {
  return word[0] === "k";
};



let isBiggerThan5 = (number: number): boolean => {
  return number > 5;
};

let res12 = isBiggerThan5(15);
console.log(res12);


