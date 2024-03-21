let palabra = prompt("Escribe la palabra");

function isIsograma(palabra) {

    palabra = palabra.toLowerCase();

    contador = {};

    palabra.split('').forEach(letra => contador[letra] = contador[letra] ? contador[letra] + 1 : 1);

    let veces;

    for(letra in contador){
        if(!veces){
            veces = contador[letra];
        }else if(contador[letra] != veces){
            return false;
        };
        
    }

    return true;
}

if (isIsograma(palabra)) {
    console.log("Es isograma");
} else {
    console.log("No es isograma");
}
