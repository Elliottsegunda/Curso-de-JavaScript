/*
 && - operador logico AND, ele verifica e retorna verdadeiro  se todas as  condições forem verdadeiras
 || - operador logico OR ele verifica e retorna verdadeiro se pelo menos uma das condições for verdadeira
 ! - operador de negação, ele inverte o resultado, se o resultado for verdadeiro ao usarmos a negação será falso.

 if(2 == 4 || 3 >= 5 || 'a' == 'b'){
    document.write('Verdade');
}
else{
    document.write('Falso');
}
ele vai retornar falso porque todas as condições são falsas

=========================NEGAÇÃO ===========================
if(!(2 == 2)){
    document.write('Verdade');
}
else{
    document.write('Falso');
}

*/
if(2 == 2 || 3 >= 1 && 'a' == 'b'){
    document.write('Verdade');
}
else{
    document.write('Falso');
}

 document.write('<hr>')

 var media = prompt('Digite a sua media:');
 var faltas = prompt('Digite quantidade de faltas:');
 var faltas_maximas = 15;

 if( media >= 7 && faltas <= faltas_maximas  ){
    document.write('<hr>')
    document.write('A sua media é ' +media+' e o seu numero de faltas não excede o limite, com isso, você está APROVADO');
 }else{
    document.write('A sua media é ' +media+' Você infelizmente está reprovado');

 }