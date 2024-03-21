let numero = 132189;

function digitalRoot(a) {
    if (a < 10) {
        return a;
    } else {
        let suma = 0;
        while(a > 0){
            suma += a % 10;
            a = Math.trunc(a / 10);
        }
        return digitalRoot(suma);
    }
}

console.log(digitalRoot(numero));
