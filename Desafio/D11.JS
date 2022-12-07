//11-[ ]Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
//Porém, os dois nomes devem estar em um objeto. 
//Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const personZero = {
    name: "Arthur",
    nametwo: "Valeria"
}


let compareOne = `${personZero.name} e igual ${personZero.name}? `
let compareTwo =  `${personZero.name} e igual ${personZero.nametwo}? `
let resultOne = personZero.name == personZero.name
let resultTwo = personZero.name == personZero.nametwo
let comment = `Se alguns dos nomes forem iguais o resultado vai ser ${resultOne} se
não o resultado vai ser ${resultOne}`

console.log(comment)
console.log(compareOne)
console.log(resultOne)
console.log(compareTwo)
console.log(resultTwo)