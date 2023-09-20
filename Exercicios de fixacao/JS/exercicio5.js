var objectos = Array();
objectos[0] = 'Cadeira';
objectos[1] = 'Impressora';
objectos[2] = 'Garfo';

function adicionarElemento(){
    var dados_campo = document.getElementById('campo_texto').value;
    if(dados_campo === ''){
        alert('Informe um valor valido');
    }
    else if(objectos.indexOf(dados_campo) === -1){
        objectos.unshift(dados_campo);
        console.log(objectos);
       document.getElementById('campo_texto').value = '';

    }
    else{
        alert('Objecto já adicionado');
    }

}
function ordenarElemento (){
    objectos.sort();
    console.log(objectos);
}