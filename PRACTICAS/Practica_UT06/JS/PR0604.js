let divExterior = document.createElement('div');
divExterior.classList.add('divcuadrado');
document.body.appendChild(divExterior);

let cuadrado = document.createElement('div');
cuadrado.classList.add('cuadrado');
divExterior.appendChild(cuadrado);
cuadrado.addEventListener('click', mover);

let contador = document.createElement('div');
contador.classList.add('contador');
document.body.appendChild(contador);
contador.textContent = "00";

let clics = 0;

function mover(event) {
    let cuadrado = event.target;
    let X = Math.random() * (window.innerWidth - cuadrado.clientWidth);
    let Y = Math.random() * (window.innerHeight - cuadrado.clientHeight);
    let width = (Math.floor(Math.random()*180))+15;
    let height = (Math.floor(Math.random()*100))+15;

    cuadrado.style.left = X + 'px';
    cuadrado.style.top = Y + 'px';
    cuadrado.style.width = width + 'px';
    cuadrado.style.height = height + 'px'; 

    clics++;
    actualizarContador();
}

function actualizarContador() {
    let textoContador = clics < 10 ? '0' + clics : clics;
    contador.textContent = textoContador;
}











