function makeTags(tag: string, word: string) {
    return '<' + tag + '>' + word + '</' + tag + '>'
}

let tag1 = makeTags('i', 'Yay') 
let tag2 = makeTags('i', 'Hello') 
let tag3 = makeTags('cite', 'Yay') 

console.log(tag1)
console.log(tag2)
console.log(tag3)