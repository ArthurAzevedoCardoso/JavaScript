//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, 
//qual é o maior, qual é o menor.

let cota = 2
let cota1 = 5
let cota2 = 10


if (cota > cota1 && cota > cota2){
    console.log(`O numero maior e a ${cota}` )
}else if(cota2 > cota1 && cota2 > cota){
    console.log(`O numero maior e a ${cota2}`)
}
else {
    console.log(`O numero maior e a ${cota1}` )
}

if (cota < cota1 && cota < cota2){
    console.log(`O numero menor e a ${cota}` )
}else if(cota2 < cota1 && cota2 < cota){
    console.log(`O numero menor e a ${cota2}`)
}
else {
    console.log(`O numero menor e a ${cota1}` )
}





