//[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
//a pessoa deve ser maior de idade e brasileira para ser aprovada.
//Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const person1 = {
    name: "Arthur",
    age: 28,
    sex: "male",
    height: 1.7,
    nationality: "Brasileria"
}

const person2 = {
    name: "Valeria",
    age: 25,
    sex: "female",
    height: 1.7,
    nationality: "EUA"
}

const person3 = {
    name: "Valeria",
    age: 1,
    sex: "female",
    height: 1.7,
    nationality: "Brasileria"
}

const nationality = "Brasileria"

if( person3.age > 18 && person3.nationality === nationality ){
    console.log("Parabens você foi aprovada")
}else{
    console.log("Infelismente você não foi aprovada")
}