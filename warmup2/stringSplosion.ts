function stringSplosion (str: string): string {
    let index = 0;
    let actualWord = "";
    let newWord = "";
    let nextChar = str[index];

    while (nextChar !== undefined) {
        actualWord += nextChar
        newWord += actualWord
        index += 1;
    }

    return newWord
}

let wordSplosion = stringSplosion("Code") // "CCoCodCode"

console.log(wordSplosion)