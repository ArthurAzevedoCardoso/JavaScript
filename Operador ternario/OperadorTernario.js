/* OPERADOR TERNÁRIO OU CONDICIONAL 

    ? SE 
    : SE NÃO 

*/

const rain = true 
const umbrela = rain ? 'levar guarda-chuva' : 'deixar o guarda chuva'


const balance = true 
const isNotBlocked = true 
const accountExist = false

const transferOK = balance && isNotBlocked && accountExist ? 'TRANSFERENCIA REALIZADA ' : 'TRANFERENCIA NEGADA'

console.log (transferOK)
console.log (umbrela)

