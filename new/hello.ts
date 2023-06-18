
let numberList:number[] = [1, 2, 3, 10, 15, 60, 70, 12]

function numberL(number:number[]): number[] {
    let num10 : number [] = []
    let index = 0

    while (number[index] !== undefined) {
        let num =  number[index]

        if(num > 10)
        num10 = [...num10, num]
        index += 1
    }
    return num10

}
let res = numberL(numberList)
console.log(res)


type Person = {
    name: string
    age: number
    gender: string
}

let people1: Person [] = [
    {
        name: "John Smith",
        age : 35,
        gender: "male",

    },
]

let people2: Person [] = [
    {
        name: "Sarah Smith",
        age : 35,
        gender: "female",

    },
]

let people3: Person [] = [
    {
        name: "Joe Smith",
        age : 35,
        gender: "male",

    },
]

function getPeople(people:Person[], gender: string) : Person [] {
        let peopleList: Person[] = []

        let index = 0

        while (people[index] !== undefined) {
            let person = people[index]

            if (person.gender === "male"){
                peopleList = [...peopleList, person]
            }
            index += 1
        }

        return peopleList
}

let resT: Person [] = getPeople(people1, "male")
console.log(resT)