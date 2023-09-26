
lista_pessoas = Array();
lista_pessoas[0] = 'Elliott';
lista_pessoas[1] = 'Davis';
lista_pessoas[2] = 'Ambriz';
lista_pessoas[3] = 'Segunda';

console.log(lista_pessoas);
    for(var i = 0; i<= lista_pessoas.length; i++){
        console.log(lista_pessoas[i]);
    }
    document.write('<hr>');

    var x = 1;
    var y = 1;

    while(x <=12){
        y=1;
        while(y <=12 ){

        
        document.write(x+' X '+y+' = '+ x*y +'<br>');
        y++;
        }
        x++
    }