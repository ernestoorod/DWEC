let palabra = prompt('Escribe la frase')

function isPangrama(palabra) {

    let letras = "abcdefghijklmnopqrstuwxyz";
    
    palabra = palabra.toLowerCase();

    for (let letra of letras) {
        if (!palabra.includes(letra)) {
            return false;
        }
    }
    
    return true;
}

if(isPangrama(palabra)){
    console.log('Es pangrama');
}else{
    console.log('No es pangrama');
}