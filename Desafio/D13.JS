//13-[ ] Faça um programa onde colocamos dois numeros ímpares e o 
//programa imprima o resto da divisão. 
//Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.

let conta1 = ((Math.random(1)*10) )
let conta2 = ((Math.random(1)*10) )
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = conta2.toFixed(0)

const account = cota%cota1

console.log(cota)
console.log(cota1)
console.log(account)