//8-[ ] Faça um programa onde leia um número e diga se ele é:
// - ímpar, 
// - par, 
// - é um número primo e impar, 
// - é par e divisível por 5.


let number = 100
const math = number%2
const math1 =number%5 
const math3 = number/1 
const math4 = number/number

if( math === 0 ){
    console.log("Este mumero e par")
}
else 
{
    console.log("Este numero e impar")
}

if(math3 === number && math4 === 1 && math===1 )
    console.log("Este numero e impar e primo")

if(math === 0 && math1 === 0  ){
    console.log("Este numero e par e divisivel por 5")
}




