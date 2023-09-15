var num1 = prompt('Digite o primeiro numero:');
var operacao = prompt('Deseja somar ou subtrair?:');
var num2 = prompt('Digite o segundo numero:');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

function somarNumeros(){
    soma = num1 + num2;
    return soma;
}

function subtrairNumeros(){
    soma = num1 - num2;
    return soma;
}

if(operacao == 'somar'){
    document.write('O resultado da soma '+num1+' e'+num2+' é:'+somarNumeros());
}
else if(operacao == 'subtrair'){
    document.write('O resultado da Subtração entre '+num1+' e'+num2+'é:'+subtrairNumeros());

}
else{
    document.write('Erro: Operação designada não corresponde a somar ou subtração!');
}