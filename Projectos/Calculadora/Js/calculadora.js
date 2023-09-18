function calcular(tipo, valor){
    console.log(tipo, valor);

    if(tipo === 'acao'){
        if(valor === 'c'){
            //limpar o visor
            document.getElementById('resultado').value = '';
        }

    }
    else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor;

    }
}