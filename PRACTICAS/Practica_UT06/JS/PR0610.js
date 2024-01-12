//    Una fecha de la forma ‘dd/mm/aaaa’. Ejemplos: '08/12/2022', '23/01/2021'
function validarFecha() {
    let tipo = 'fecha';
    let valor = document.getElementById('fecha').value;
    
    let regex = /^(0[0-9]|[1-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-2][0-9]{3}$/;


    let resultado = document.getElementById(tipo + 'InputResult');
    if (regex.test(valor)) {
        resultado.innerHTML = "Esta bien";
    } else {
        resultado.innerHTML = "No esta bien";
    }
}

document.getElementById('fecha').addEventListener('change', validarFecha);

//    Un número de teléfono de la forma ‘(+xx) xxx xxxxxx’. Los espacios pueden ser opcionales. Ejemplos: '+34) 987 111 222, (+34)912345678
function validarTelefono(){
    let tipo = 'telefono';
    let valor = document.getElementById('telefono').value;

    let regex = /^\(\+\d{2}\)\s?\d{3}\s?\d{3}\s?\d{3}$/;
    
    let resultado = document.getElementById(tipo + 'InputResult');
    if (regex.test(valor)) {
        resultado.innerHTML = "Esta bien";
    } else {
        resultado.innerHTML = "No esta bien";
    }
}


document.getElementById('telefono').addEventListener('change', validarTelefono);

//    Un correo electrónico. Ejemplos: usuario@mail.com, alumno@educa.jcyl.es, alumno-daw@mail.es
function validarCorreo(){
    let tipo = 'correo';
    let valor = document.getElementById('correo').value;

    let regex = /^[a-z0-9]+@[a-z0-9]+\.[a-zA-Z]{3}$/;
    
    let resultado = document.getElementById(tipo + 'InputResult');
    if (regex.test(valor)) {
        resultado.innerHTML = "Esta bien";
    } else {
        resultado.innerHTML = "No esta bien";
    }
}


document.getElementById('correo').addEventListener('change', validarCorreo);

//    Un código de color en hexadecimal. Ejemplo: #45a4ef, #AB3FE5

//    Una dirección IP. Ejemplos: 10.0.0.1, 192.168.255.1

//    Una URL. Ejemplos: https://google.com, http://google.es, http://www.google.com

//    Una contraseña que contenga por lo menos una minúscula, una mayúscula, un dígito y tenga una longitud mínima de 8 caracteres. Ejemplo: Villabalter1

//    Un NIF. Ejemplos: 10200300A, 2123456R

//    Una matrícula de coche. Ejemplo: 9119LJF

