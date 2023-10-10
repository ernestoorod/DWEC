function sumOfMults(k, n) {
    let suma = 0;

    for (let i = 1; i <= k; i++) {
        suma += n * i;
    }

    return suma;
}

console.log(sumOfMults(3, 5));
console.log(sumOfMults(2, 10));
