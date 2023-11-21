let ul = document.querySelector('ul');
let agregar = document.getElementById('add-button');
let tareas = [];
let texto = document.getElementById('input-text');
 
let borrarLista  = document.querySelector('#borrar-abajo button');
 
agregar.addEventListener('click', ()=>{
    if (texto.value != "") {
        let id = generarId();
        let tarea ={
            idObjeto : id,
            contenido : texto.value,
            hecho : "false"
        };
        tareas.push(tarea);
        generarHtml(tareas);
        texto.value = "";
    }else{
        alert("No puedes añadir campos vacios");
    }
   
   
});
 
 
function cargarBotones() {
    let borrar = document.querySelectorAll("span.btn");
    borrar.forEach(botonBorrar =>{
        botonBorrar.addEventListener('click', (boton)=>{
 
        let id  = boton.currentTarget.getAttribute("data-id-propia");
        tareas = tareas.filter(tarea => tarea.idObjeto !== id);
       
        generarHtml(tareas);
    });
})};
 
function cargarBotonesMarcado() {
    let marcar = document.querySelectorAll("span.marcar");
    marcar.forEach(botonMarcar =>{
        botonMarcar.addEventListener('click', boton => {
            let id = boton.currentTarget.getAttribute("data-id-propia");
            let tarea = tareas.find(t => t.idObjeto === id);
       
            tarea.hecho = (tarea.hecho === "false") ? "true" : "false";
            generarHtml(tareas);
        });
       
})};
 
 
function generarHtml(tareas) {
    ul.innerHTML = "";
 
    tareas.forEach((tarea) => {
        let li = document.createElement('li');
 
        li.setAttribute("id", tarea.idObjeto);
        li.classList.add("todo");
        li.dataset.hecho = tarea.hecho;
        let boton = document.createElement('span');
        boton.classList.add("btn");
        boton.dataset.idPropia = tarea.idObjeto;
 
        let marcar = document.createElement('span');
        marcar.classList.add('marcar');
        marcar.dataset.idPropia = tarea.idObjeto;
        marcar.textContent = "X"
 
        boton.textContent = "Borrar";
        li.append(marcar);
        li.append(document.createTextNode(tarea.contenido));
        li.append(boton);
        ul.append(li);
 
       
    });
        cargarBotonesMarcado();
        cargarBotones();
}
 
borrarLista.addEventListener('click', ()=>{
    tareas.length = 0;
    generarHtml(tareas);
});
 
 
function generarId(){
    return Math.floor((Math.random() * (36**4))).toString(36).padStart(4, '0');
 
}