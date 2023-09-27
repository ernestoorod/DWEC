let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
let pi = Math.PI;
let perimetro = 2 * pi * radio;
let area = pi * Math.pow(radio, 2);

console.log(`El perímetro del círculo de radio ${radio} es ${perimetro} y su área es ${area}.`);
