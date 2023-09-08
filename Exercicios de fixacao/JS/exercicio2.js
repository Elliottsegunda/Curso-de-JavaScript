
var nome = prompt('Digite o seu nome:');
var altura = prompt('Digite a sua altura em centimetro:');
var peso = prompt('Digite o seu peso:');
var massa =null;

 altura = parseFloat(altura);
 peso = parseFloat(peso);

 altura /=100;

 massa = peso / altura**2;

  if (massa <16) {
    document.write(+nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso muito grave');
  }
  else if(massa >= 16 && massa <=16.99 ){
    document.write(+nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso grave');
  }
  else if(massa >= 17 && massa <=18.49 ){
    document.write(+nome+' possui índice de massa corporal igual a: '+massa+' sendo classificado como : Baixo peso grave');
  }
