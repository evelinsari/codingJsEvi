function countYZ(str: string) {
  let index = 0;
  while (str[index + 1] !== undefined) {
    index++;
  }
  let lastOne = str[index];

  let counter = 0;

  if (lastOne.toLowerCase() === "y" || lastOne.toLowerCase() === "z") {
    counter++;

    index = 0;
    while (str[index + 1] !== undefined) {
      if (
        str[index + 1].toLowerCase() == str[index + 1].toUpperCase() &&
        str[index].toLowerCase() === "y"
      )
        counter++;

      if (
        str[index + 1].toLowerCase() == str[index + 1].toUpperCase() &&
        str[index].toLowerCase() === "z"
      )
        counter++;

      index++;
    }

    return counter;
  }
}

let yz1 = countYZ("Fez day"); // 2
let yz2 = countYZ("day fez"); // 2
let yz3 = countYZ("day fyyyz"); // 2

console.log(yz1);
console.log(yz2);
console.log(yz3);

// mi lenne itt a szép megoldás?
