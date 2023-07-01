function mumBling(s: string) {
 let i = 0

 let blingList = ''
 while (s[i] !== undefined) {
  blingList+= s[i].toUpperCase()
  let j = 0
  while (j < i) {
    blingList+= s[i]
    j++
    
  }
  if (s[i + 1] !== undefined)blingList += "-"
  i++
 }
 return blingList
}

let mum1 = mumBling("ZpglnRxqenU"); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

console.log(mum1);

