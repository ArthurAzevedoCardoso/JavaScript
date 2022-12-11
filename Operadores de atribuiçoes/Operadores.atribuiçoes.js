/*OPERADORES ARITIMETICOS 
 
    = ->Atribuiçõa 
    += ->Adição 
    -= ->Subtração 
    /= ->DIvisão 
    *= ->Multiplicação 
    %= ->Resto 
*/

let conta1 = ((Math.random(1) * 10))
let conta2 = ((Math.random(1) * 10))
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = conta2.toFixed(0)
let Decimal = parseInt(cota, 10);
let Decimal1 = parseInt(cota1, 10);


//const account = Decimal = Decimal1
const account = Decimal += Decimal1
const account1 = Decimal -= Decimal1
const account2 = Decimal /= Decimal1
const account3 = Decimal *= Decimal1
const account4 = Decimal %= Decimal1

let result = `O valor ${Decimal} + ${Decimal1}`
let result1 = `O valor ${result} - ${Decimal1}`
let result2 = `O valor ${Decimal} / ${Decimal1}`
let result3 = `O valor ${Decimal} * ${Decimal1}`
let result4 = `O valor ${Decimal} % ${Decimal1}`

console.log(cota)
console.log(cota1)

console.log(result)
console.log(account)
console.log(result1)
console.log(account1)
console.log(result2)
console.log(account2)
console.log(result3)
console.log(account3)
console.log(result4)
console.log(account4)
