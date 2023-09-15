function focarInput(corDeFoco) {
    document.getElementById('texto').style.backgroundColor = corDeFoco;
}
function pegarValor(){
   var num_caracter = document.getElementById('texto').value;
   
   if( num_caracter.length >= 3 ){
        document.getElementById('texto').style.backgroundColor =' #00ff00';
   }
   else{
    document.getElementById('texto').style.backgroundColor =' #ff0000';

   }
   return num_caracter;
}