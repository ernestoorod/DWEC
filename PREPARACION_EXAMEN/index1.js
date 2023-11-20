function isPrime(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i * i <= n; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

while (true) {
    try {
        const input = prompt("Introduce un número (0 para salir): ");
        const numero = parseInt(input);

        if (isNaN(numero)) {
            throw new Error("Por favor, introduce un número entero.");
        }

        if (numero === 0) {
            console.log("¡Hasta luego!");
            break;
        } else if (isPrime(numero)) {
            console.log(`${numero} es un número primo.`);
        } else {
            console.log(`${numero} no es un número primo.`);
        }
    } catch (error) {
        console.log(error.message);
    }
}
