let contenedor = document.querySelector('div');
let boton = document.querySelector('button');

boton.addEventListener('click', function () {
    let imagenes = contenedor.querySelectorAll('img');

    let imagenesArray = Array.from(imagenes);

    imagenesArray.sort(function() { 
        return Math.random() - 0.5 
    });

    imagenesArray.forEach(function (imagen) {
        contenedor.append(imagen);
    });

});
