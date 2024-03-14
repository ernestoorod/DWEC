let palabra = prompt("Escribe la palabra");

function isIsograma(palabra) {

    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {

        let letra = palabra[i];

        for (let e = i + 1; e < palabra.length; e++) {

            if (letra == palabra[e]) {
                return true;
            }

        }
    }

    return false;
}

if (isIsograma(palabra)) {
    console.log("Es isograma");
} else {
    console.log("No es isograma");
}
