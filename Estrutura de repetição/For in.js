/*FOR IN */

const student = {
    name:'Arthur',
    age:24,
    genre: 'Male',
}

for(let property in student){
console.log(`${property}:${student[property]}`)
}