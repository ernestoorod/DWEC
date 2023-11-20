let texto = document.getElementById('input-text');
let boton = document.getElementById('add-button');
let clearButton = document.getElementById('clear-button');
let lista = [];

function listas() {
    let ul = document.querySelector('#todos ul');

    ul.innerHTML = "";

    for (let k = 0; k < lista.length; k++) {
        let tarea = lista[k];

        let li = document.createElement('li');

        let deleteButton = document.createElement('span');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('btn');
            deleteButton.addEventListener('click', function() {
                eliminarTarea(tarea.id);
        });

        let doneButton = document.createElement('span');
            doneButton.textContent = tarea.hecha ? 'Desmarcar' : 'X';
            doneButton.classList.add('btn');
            doneButton.addEventListener('click', function() {
                marcarComoHecha(tarea.id);
        });


        if (tarea.hecha) {
            ul.classList.add('completed');
        }

        
        li.appendChild(doneButton);
        li.appendChild(document.createTextNode(tarea.texto));
        li.appendChild(deleteButton);
        ul.appendChild(li);
    }
}

function cuadro() {
    let tarea = {
        id: generarId(),
        texto: texto.value,
        hecha: false
    };

    lista.push(tarea);
    listas();
}

function eliminarTarea(id) {
    lista = lista.filter(tarea => tarea.id !== id);
    listas();
}

function marcarComoHecha(id) {
    lista = lista.map(tarea => {
        if (tarea.id === id) {
            tarea.hecha = !tarea.hecha;
        }
        return tarea;
    });

    listas();
}

function generarId() {
    return Math.floor(Math.random() * Math.pow(36, 8)).toString(36).padStart(4, '0');
}

boton.addEventListener("click", cuadro);

clearButton.addEventListener('click', function() {
    lista = [];
    listas();
});
