function plusOut(str:string, word:string): string {
    let plusOutWord: string = "";

    let i = 0;
    while (i < str.length) {
       
      if (i < str.length - word.length + 1 && str.substring(i, i + word.length) === word) {
        plusOutWord += word;
        i += word.length;
      } else {
        plusOutWord += "+";
        i++;
      }
    }
  
    return plusOutWord;
}
console.log(plusOut("12xy34", "xy")); //++xy++
console.log(plusOut("12xy34", "1")); // 1+++++
console.log(plusOut("12xy34xyabcxy", "xy")); //  ++xy++xy+++xy