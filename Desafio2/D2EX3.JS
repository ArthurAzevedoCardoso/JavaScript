//[ ] Faça um programa que gere um número aleatório entre 1 e 10, 
//esse número é o número 'ganhador'. 
//Então ele também irá gerar um número aleatório entre 1 e 10, 
//e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
//se não ganhou, mostra outra mensagem.


let conta1 = ((Math.random(1)*10) )
let conta2 = ((Math.random(1)*10) )
let cota = conta1.toFixed(0) // to fixed determina quantas casas decimais que vao aparecer depois da virgula.
let cota1 = conta2.toFixed(0)

const Text0 = `O numero ganhador do sorteado foi ${cota}`
const Text1 = `E seu numero da sorte foi o ${cota1}`
const Text3 = `Parabens voce ganhou seu premeio`
const Text4 = `Infelismente você não ganhou mas tente da proxima`

console.log(Text0)
console.log(Text1)

if (cota === cota1 ){
    console.log(Text3)
}else {
    console.log(Text4)
}

