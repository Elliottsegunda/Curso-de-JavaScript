
function distribuirCaracter(){
    //passo 1: Selecionar o valor Digitado
    var caracter_digitado = document.getElementById('caracter').value;
    //limpar o campo de digitação
    document.getElementById('caracter').value = '';

    //limpar os espaços em brancos nas extremidades.
    caracter_digitado.trim();

    switch(caracter_digitado){
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
            // todos os cases vieram sem break porque para qualquer um deles a acção será a mesma.
        break;
        default:
            //adicionar no campo de letras, se não for um numero, é uma letra
    }
}