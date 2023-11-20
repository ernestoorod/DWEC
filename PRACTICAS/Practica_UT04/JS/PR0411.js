let texto = document.getElementById('input-text');
let boton = document.getElementById('add-button');
let lista = [];

function listas() {
    let ul = document.querySelector('#todos ul');
    
    for (let k = 0; k < lista.length; k++) {
        ul.innerHTML += `<li>${lista[k]}</li>`;
    }
}

function cuadro(){
    let tarea = texto.value;
    lista.push(tarea);
    listas();
}

boton.addEventListener("click", cuadro);






