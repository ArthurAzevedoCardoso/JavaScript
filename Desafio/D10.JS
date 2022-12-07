//10-[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
//Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const personZero = {
    name: "Arthur"}
const personOne = {
        name: "Valeria"}

let compareOne = `${personZero.name} e igual ${personZero.name}? `
let compareTwo =  `${personOne.name} e igual ${personZero.name}? `
let resultOne = personOne == personOne
let resultTwo = personOne == personZero
let comment = `Se alguns dos nomes forem iguais o resultado vai ser ${resultOne} se
não o resultado vai ser ${resultOne}`

console.log(comment)
console.log(compareOne)
console.log(resultOne)
console.log(compareTwo)
console.log(resultTwo)

