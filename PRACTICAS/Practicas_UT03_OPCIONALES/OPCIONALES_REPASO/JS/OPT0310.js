function findNextPower( n, pow) {
    if (n <= 0 || pow <= 0) {
        return null;
    }
    
    let potencia = 1;
    while (Math.pow(potencia, pow) <= n) {
        potencia++;
    }
    
    return Math.pow(potencia, pow);
}

console.log(findNextPower( 70, 4 ));
console.log(findNextPower( 12385, 3 ));
