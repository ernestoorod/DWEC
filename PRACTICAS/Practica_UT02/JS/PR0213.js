function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

const k = parseInt(prompt("Introduzca un valor k:"));
let count = 0;
let currentNumber = 2;

while (count < k) {
    if (isPrime(currentNumber)) {
        console.log(currentNumber);
        count++;
    }
    currentNumber++;
}
