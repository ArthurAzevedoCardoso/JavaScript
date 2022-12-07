//14-[ ]Faça um programa onde entramos com dois números, 
//e ele imprime se o primeiro número é maior que o segundo. 
//Ex: 2 e 5. Imprime: false.
//15-[ ]Faça um programa onde entramos com dois números, 
//e ele imprime se o primeiro número é menor que o segundo. 
//Ex: 2 e 5. Imprime: true.

let conta1 = ((Math.random(1)*10) )
let conta2 = ((Math.random(1)*10) )
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = conta2.toFixed(0)

let result = `O valor ${cota} < ${cota1}`
let result1 = `O valor ${cota} > ${cota1}`
const account = cota < cota1
const account1 = cota>cota1

console.log(result)
console.log(account)
console.log(result1)
console.log(account1)