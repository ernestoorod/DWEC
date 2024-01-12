let inputCorreo = document.getElementById('correo');
let mensajeError = document.getElementById('mensaje-error');
let contraseña = document.getElementById('contraseña');
let repcontraseña = document.getElementById('repcontraseña');

inputCorreo.addEventListener('blur', function() {
    let correo = inputCorreo.value
    if (correo.indexOf('@') == -1 || correo.indexOf('.') == -1) {
        mensajeError.textContent = "No tiene ni @ ni punto(.), mete un correo valido";
    } else {
        mensajeError.textContent = "";
    }
});



