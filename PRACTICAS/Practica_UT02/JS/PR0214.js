function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

const numero = 5;
const resultado = fact(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);
