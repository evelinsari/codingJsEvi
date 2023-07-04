type Person1 = {
  name: string;
  age: number;
  gender: string;
};

let people: Person[] = [{ name: "Jango Fett", age: 35, gender: "male" }];

function createCloneArmy(people: Person1[], number: number): Person1[] {
  let i = 0;
  let finalList: Person1[] = [];

  while (i < number && i < 100) {
    finalList = [...finalList, people[i]];
    i++;
  }

  return finalList;
}

let clone1 = createCloneArmy(people, 3);
let clone2 = createCloneArmy(people, 30);
let clone3 = createCloneArmy(people, 45);
let clone4 = createCloneArmy(people, 50);
console.log(clone1);
console.log(clone2);
console.log(clone3);
console.log(clone4);
