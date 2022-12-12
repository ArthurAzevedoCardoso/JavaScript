/* CONTROLE DE FLUXO IF/ELSE/ ELSE IF 

    IF =se 
    ELSE = se não 
    ELSE IF = mais se... 

*/


const temperatura = 37

if (temperatura >= 36 && temperatura <= 39){
    console.log('A pessoa está saudável')
}else if (temperatura > 39){
    console.log('A pessoa está com febre ')
}else {
    console.log('A pessoa esta com a temperatura muita baixa, procure um médico')
}
