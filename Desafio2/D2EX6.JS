//Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.


const nota = 99

switch (nota) {
    case 4 :
        console.log('Parabens sua nota foi 4 ')
        break;

    case 3:
        console.log('Parabens sua nota foi 3')
        break;

    case 2:
        console.log('Parabens sua nota foi 2')
        break;

    case 1:
        console.log('Parabens sua nota foi 1')
        break;

    default:
        console.log('Infelizmente a sua nota não foi encontrada')
        break;
}