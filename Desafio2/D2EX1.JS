//[ ] Faça um programa que compare um número com 10 
//e imprime na tela "o número é maior, o número é menor o número é igual"

let conta1 = ((Math.random(1)*10) )
let conta2 = ((Math.random(1)*10) )
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = 10

let result = `O valor ${cota} < ${cota1}`
let result1 = `O valor ${cota} > ${cota1}`
const account = cota < cota1
const account1 = cota>cota1

console.log(result)
console.log(account)
console.log(result1)
console.log(account1)