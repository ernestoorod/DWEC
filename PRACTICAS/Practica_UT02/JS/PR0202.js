let nombre = prompt("Por favor, ingresa tu nombre:");

let notaExamen1 = parseFloat(prompt("Ingresa la nota del primer examen:"));

let notaExamen2 = parseFloat(prompt("Ingresa la nota del segundo examen:"));

let notaMedia = (notaExamen1 + notaExamen2) / 2;

let mensaje = `Hola ${nombre}, la nota media de tus exámenes es ${notaMedia.toFixed(2)}.`;

console.log(mensaje);