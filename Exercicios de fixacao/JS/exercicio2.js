
var nome = prompt('Digite o seu nome:');
var altura = prompt('Digite a sua altura em centimetro:');
var peso = prompt('Digite o seu peso:');
var massa =null;

 altura = parseFloat(altura);
 peso = parseFloat(peso);

 altura /=100;

 massa = peso / altura**2;

  if (massa <16) {
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso muito grave');
  }
  else if(massa >= 16 && massa <=16.99 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso grave');
  }
  else if(massa >= 17 && massa <=18.49 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso');
  }
  else if(massa >= 18.50 && massa <=24.99 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Peso normal');
  }
  else if(massa >= 25 && massa <=29.99 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Sobrepeso');
  }
  else if(massa >= 30 && massa <=34.99 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Obesidade Grau I');
  }
  else if(massa >= 35 && massa <=39.99 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Obesidade grau II');
  }
  else if(massa >= 40 ){
    document.write(nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Obesidade grau III');
  }
  else{
    document.write(nome+' Não conseguimos calcular seu indice de massa corporal, por favor reinicie o programa ');
  }
