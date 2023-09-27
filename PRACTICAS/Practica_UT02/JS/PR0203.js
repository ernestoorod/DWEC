let precioManzanas = parseFloat(prompt("Precio por kilo de manzanas:"));
let cantidadManzanas = parseFloat(prompt("Cantidad de manzanas:"));
let precioNaranjas = parseFloat(prompt("Precio por kilo de naranjas:"));
let cantidadNaranjas = parseFloat(prompt("Cantidad de naranjas:"));
let precioPlatanos = parseFloat(prompt("Precio por kilo de plátanos:"));
let cantidadPlatanos = parseFloat(prompt("Cantidad de plátanos:"));

let kilosTotales = cantidadManzanas + cantidadNaranjas + cantidadPlatanos;
let importeTotal = (precioManzanas * cantidadManzanas + precioNaranjas * cantidadNaranjas + precioPlatanos * cantidadPlatanos).toFixed(2);

console.log(`Has comprado un total de ${kilosTotales} kilos de fruta y te ha costado ${importeTotal} euros.`);
