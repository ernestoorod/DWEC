let texto = "Hola mundo";

function reverseWords(str) {
    let palabras = str.split(" ");
    
    let palabrasinvertidas = palabras.map(palabra => {
        return palabra.split("").reverse().join("");
    });

    let cadenainvertida = palabrasinvertidas.join(" ");
    
    return cadenainvertida;
}

console.log(invertirPalabras(texto));
