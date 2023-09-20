var objectos = Array();
objectos[0] = 'Cadeira';
objectos[1] = 'Impressora';
objectos[2] = 'Garfo';

function adicionarElemento(){
    var dados_campo = document.getElementById('campo_texto').value;
    if(dados_campo === ''){
        alert('Exibir um valor valido');
    }
    else if(objectos.indexOf(dados_campo) === -1){
        objectos.unshift(dados_campo);
        console.log(objectos);
        dados_campo.value = '';

    }

}