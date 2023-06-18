function cigarParty(cigars:number, isWeekend: boolean): boolean {
    if ((isWeekend && cigars >= 40) || (cigars >= 40 && cigars <= 60 && !isWeekend)) {
      return true;
    } else {
      return false;
    }
  }

let cigar1 = cigarParty(30, false) // false
let cigar2 = cigarParty(50, false) // true
let cigar3 = cigarParty(70, true) // true

console.log(cigar1)
console.log(cigar2)
console.log(cigar3)