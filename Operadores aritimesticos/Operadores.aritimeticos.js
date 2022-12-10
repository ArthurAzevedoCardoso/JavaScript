/*Operadores aritmeticos 

    + ->Adição
    - ->Subtração 
    * ->Multiplicação
    / ->Divisão 
    % ->Resto 
    ++ ->Incremento 
    -- ->Decremento 
    ** ->Exponecial 

*/

let conta1 = ((Math.random(1)*10) )
let conta2 = ((Math.random(1)*10) )
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = conta2.toFixed(0)

let result = `O valor ${cota} + ${cota1}`
let result1 = `O valor ${cota} - ${cota1}`
let result2 = `O valor ${cota} * ${cota1}`
let result3 = `O valor ${cota} / ${cota1}`
let result4 = `O valor ${cota} % ${cota1}`
let result5 = `O valor de ${cota} +1`
let result6 = `O valor de ${cota1} -1`
let Decimal = parseInt(cota , 10);
let Decimal1 = parseInt(cota1 , 10);



const account = Decimal +Decimal1
const account1 = cota -cota1
const account2 = cota *cota1
const account3 = cota /cota1
const account4 = cota %cota1
const account5 = cota
const account6 = cota1



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
console.log(result5)
console.log(++cota)
console.log(result6)
console.log(--cota1)



