function likes(names: string[]) {
    let counter = 0;
    while (names[counter] !== undefined) {
      counter++;
    }
    if (counter === 0) return "no one likes this";
    if (counter === 1) return names[0] + " likes this";
    if (counter === 2) return names[0] +" and " + names[1] + " like this";
    if (counter === 3) return names[0] +", "+ names[1] +" and "+ names[2] + " like this";
    if (counter >= 4) return names[0] +", "+ names[1] + " and "+ (counter-2 )+" others like this"; 
}

let like1 = likes([]); // "no one like this"
let like2 = likes(["Peter"]); // "Peter likes this"
let like3 = likes(["Jacob", "Alex"]); // "Jacob and Alex like this"
let like4 = likes(["Max", "John", "Mark"]); // "Max, John and Mark like this"
let like5 = likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this"

console.log(like1);
console.log(like2);
console.log(like3);
console.log(like4);
console.log(like5);
