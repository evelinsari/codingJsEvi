// const square = function (number: number): number {
//     return number * number
// }

//const square = number => number * number

//console.log(square(5))

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];

//const activeJobs = jobs.filter(function(job) {return job.isActive ; });
const activeJobs = jobs.filter(job => job.isActive);


const person = {
    talk() {
        setTimeout(function() {}, 1000);
        console.log("this", this);
    }
};

person.talk();

const colors = ["red", "blue", "yellow"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items)


const address = {
    street: '',
    city: '',
    country: '',

}

const street = address.street;  
const city = address.city;
const country = address.country;

const {street: st} = address;