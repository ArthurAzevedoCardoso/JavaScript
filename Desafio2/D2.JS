//[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. 
// DEVE SER UM OBJETO


const person = {
    name: "Arthur",
    age: 28,
    sex: "male",
    height: 1.7,
    nationality : 'Brasil'
}

let nationality = 'Brasil'
let Text = `A ficha do cidadão(${person}) estava com a nacionalidade Brasileira  ?`

console.log(person)
console.log(person.nationality === nationality) 