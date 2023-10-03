const n = prompt("Ingresa un número n:");
const k = prompt("Ingresa un valor k:");

if (isNaN(n) || isNaN(k)) {
  console.log("Por favor, ingresa números válidos.");
} else {

for (let i = 1; i <= k; i++) {
    const resultado = n * i;
    console.log(`${n} * ${i} = ${resultado}`);
  }
}

