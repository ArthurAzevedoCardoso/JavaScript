//8-[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. 
//Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.

const array = ["Arthur", "Valeria"]
let compareOne = `${array[0]} e igual ${array[0]}? `
let compareTwo = `${array[1]} e igual ${array[0]}? `
let result = !(array[0] == array[0])
let resultOne = !(array[0] == array[1])
let Text = `Se alguns dos nomes forem iguais o resultado vai ser ${result} se
não o resultado vai ser ${resultOne}  ?`

console.log(Text)
console.log(compareOne)
console.log(result)
console.log(compareTwo)
console.log(resultOne) 