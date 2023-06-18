function atFirst(str: string) {
  if (!str) {
    return "@@";
  }

  if (str[1] === undefined) {
    return str[0] + "@";
  }
  return str[0] + str[1];
}

let at1 = atFirst("hello"); // he
let at2 = atFirst("hi"); // hi
let at3 = atFirst("h"); // @

console.log(at1);
console.log(at2);
console.log(at3);
