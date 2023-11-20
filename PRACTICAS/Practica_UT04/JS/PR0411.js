let texto = document.getElementById('input-text');
let boton = document.getElementById('add-button');
let lista = [];

function listas() {
    let ul = document.querySelector('#todos ul');
    
    ul.innerHTML = "";

    for (let k = 0; k < lista.length; k++) {
        let tarea = lista[k];
        
        let li = document.createElement('li');
        li.textContent = tarea.texto;
        li.classList.add('todo');

        let span = document.createElement('span');
        span.textContent = 'Eliminar';
        span.classList.add('btn');
        span.addEventListener('click', function() {
            eliminarTarea(tarea.id);
        });

        li.appendChild(span);
        ul.appendChild(li);
    }
}

function cuadro(){
    let tarea = {
        id: generarId(),
        texto: texto.value
    };

    lista.push(tarea);
    listas();
}

function eliminarTarea(id) {
    lista = lista.filter(tarea => tarea.id !== id);
    listas();
}

function generarId() {
    return Math.floor(Math.random() * Math.pow(36, 8)).toString(36).padStart(4, '0');
}


console.log(generarId());

boton.addEventListener("click", cuadro);



