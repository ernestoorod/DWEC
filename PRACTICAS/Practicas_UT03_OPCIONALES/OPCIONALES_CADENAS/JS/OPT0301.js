let palabra = prompt("Escribe la palabra o frase");

function isHeterograma(palabra) {
    palabra = palabra.toLowerCase();
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] !== '' && palabra.slice(i + 1).includes(palabra[i])) {
            return false;
        }
    }
    
    return true;
}

if (isHeterograma(palabra)) {
    console.log("Es heterograma");
} else {
    console.log("No es heterograma");
}
