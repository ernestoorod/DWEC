let contenedor = document.querySelector('div');
let boton = document.querySelector('button');

boton.addEventListener('click', function () {
    let imagenes = document.querySelector('img:last-child');
    contenedor.prepend(imagenes);
});

 

