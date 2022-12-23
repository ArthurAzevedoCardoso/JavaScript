//9-[ ] Faça um programa onde ele leia 4 números. 
//Em cada caso, ele deve retornar a mensagem condizente:
// - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
// - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
// Em caso negativo dos casos a cima, 
// colocar uma mensagem => Há números pares e ímpares.~

let number = 2
let number1 = 4
let number2 = 7
let number3 = 10
const math0 = (number+number1+number2+number3)%2
const math = number%2
const math1 = number1%2
const math2 = number2%22
const math3 = number3%2


if(math === 0 && math1 === 0 && math2 === 0 && math3 === 0){
    console.log("Estes numeros são pares")

}else if(math !== 0 && math1 !== 0 && math2 !== 0 && math3 !== 0){
    console.log("Estes numeros são impares")
}else {
    console.log("Há números pares e ímpares.")
}

