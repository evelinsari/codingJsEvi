function zipZap(str: string) {
  let i = 0;
  let newZip = "";
  if (str.length < 3) return str;

  while (str[i] !== undefined) {
    if (
      (str[i - 1] !== "z" && str[i + 1] !== "p") ||
      (str[i - 1] === "z" && str[i + 1] !== "p") ||
      (str[i - 1] !== "z" && str[i + 1] === "p")
    ) {
      newZip += str[i];
    }
    i++;
  }
  return newZip;
}

let zip1 = zipZap("zipXzap"); // zpXzp
let zip2 = zipZap("zopzop"); // zpzp
let zip3 = zipZap("azbcpzpp"); // azbcpzp   azpp

console.log(zip1);
console.log(zip2);
console.log(zip3);
