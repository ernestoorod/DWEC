let keyboard = document.getElementById('keyboard');
let spaces = document.getElementById('spaces');
let oculta = [];

function generaPalabra() {
    let randIndex = Math.floor(Math.random() * words.length);
    let palabra = words[randIndex].toUpperCase();
    console.log(palabra);
    oculta = [];
    pintarGuiones(palabra.length);
}

function pintarGuiones(num) {
    for (let i = 0; i < num; i++) {
        oculta[i] = "_";
        let span = document.createElement('span');
        span.classList.add('space');
        spaces.appendChild(span);
    }
}

for (let i = 1; i <= 26; i++) {
    let letras = document.createElement('span');
    letras.classList.add('key');
    keyboard.appendChild(letras);
    letras.textContent = String.fromCharCode(96 + i);
}

generaPalabra();


  