let nombre = prompt("Por favor, ingresa tu nombre:");
let notaExamen1 = prompt("Ingresa la nota del primer examen:");
let notaExamen2 = prompt("Ingresa la nota del segundo examen:");
let notaExamen1_1 = parseFloat(notaExamen1);
let notaExamen1_2 = parseFloat(notaExamen2);
let notaMedia = (notaExamen1_1 + notaExamen1_2) / 2;
let mensaje = `Hola ${nombre}, la nota media de tus exámenes es ${notaMedia}.`;

console.log(mensaje);
