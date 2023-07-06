function catDog(str: string): boolean {
  let index = 0;
  let counterCat = 0;
  let counterDog = 0;

  while (str[index] !== undefined) {
    if (str[index] + str[index + 1] + str[index + 2] === "cat") {
      counterCat++;
      index += 2;
    }
    if (str[index] + str[index + 1] + str[index + 2] === "dog") {
      counterDog++;
      index += 2;
    }
    index++;
  }

  return counterCat === counterDog;
}

let dog1 = catDog("dogdogcat"); // true
// let dog2 = catDog("catcat"); // false
// let dog3 = catDog("1cat1cadodog"); // true

console.log(dog1);
// console.log(dog2);
// console.log(dog3);
