
var idade = prompt('Digite a sua idade');

idade = parseInt(idade);

if( idade >= 0 && idade <= 15){
    document.write('Caro usuario, pelos criterios de idade o senhor é uma criança');

}
else if( idade >= 15 && idade <= 30){
    document.write('Caro usuario, pelos criterios de idade o senhor é Jovem');
}
else if( idade >= 30 && idade <= 60){
    document.write('Caro usuario, pelos criterios de idade o senhor é Adulto');
}
else if( idade >= 60 && idade <= 104){
    document.write('Caro usuario, pelos criterios de idade o senhor é Idoso');
}
else if(idade >= 108){
    document.write('Caro usuario, pelos criterios de idade o senhor está morto');
}
else{
    document.write('idade não identificada')
}