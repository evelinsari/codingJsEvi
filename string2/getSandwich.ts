function getSandwich(str:string) {
    if (str.length < 10)   return "";
    
      let i = 0;
      let middle = "";
      let breadEnd = false;
    
      while (i < str.length - 4) {
        if (str[i] === "b" && str[i + 1] === "r" && str[i + 2] === "e" && str[i + 3] === "a" && str[i + 4] === "d") {
          breadEnd = true;
          i += 4;
        } else if (breadEnd) {
          middle += str[i];
        }
    
        i++;
      }
    
      return middle;
}

let sand1 = getSandwich('breadjambread') // jam
//let sand2 = getSandwich('xxbreadjambreadyy') // jam
//let sand3 = getSandwich('xxbreadyy') //       

console.log(sand1)
//console.log(sand2)
//console.log(sand3)