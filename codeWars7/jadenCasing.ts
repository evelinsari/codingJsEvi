function casingStrings(str:string):string {
  let newSentence = ''
  let i = 0

  while (str[i] !== undefined) {
    if (str[i - 1] !==  " ") {
        newSentence += str[i]
    }
    if (str[i - 1] ===  " ") {
        newSentence+= str[i].toUpperCase()
    }
    
    i++
  }
  return newSentence
 }

 let case1 = casingStrings ("How can mirrors be real if our eyes aren't real") // "How Can Mirrors Be Real If Our Eyes Aren't Real"

 console.log(case1)