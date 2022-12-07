//6-[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
//Ex: João e João, imprime false. João e Maria, imprime true.

const NameOne = `Arthur`
const NameTwo =  `Valeria`
let Text = `Se alguns dos nomes forem iguais o resultado vai ser falso se
não o resultado vai ser verdadeiro  ?`
let result = !(NameOne == NameOne) 
let resultOne =!(NameOne == NameTwo)
let compareOne = `${NameOne} e igual ${NameOne}? `
let compareTwo = `${NameOne} e igual ${NameTwo}? `

console.log(compareOne) 
console.log (result)

console.log(compareTwo)
console.log (resultOne)