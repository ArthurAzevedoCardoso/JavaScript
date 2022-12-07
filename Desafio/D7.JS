//7-[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um Array. 
//Ex: const array = ["João", "Maria"]. João e João, imprime true. João e Maria, imprime false.

const array = ["Arthur", "Valeria"]
let compareOne = `${array[0]} e igual ${array[0]}? `
let compareTwo = `${array[1]} e igual ${array[0]}? `
let result = array[0] == array[0]
let resultOne = array[0] == array[1]
let Text = `Se alguns dos nomes forem iguais o resultado vai ser verdadeiro se
não o resultado vai ser falso  ?`

console.log(Text)
console.log(compareOne)
console.log(result)
console.log(compareTwo)
console.log(resultOne) 