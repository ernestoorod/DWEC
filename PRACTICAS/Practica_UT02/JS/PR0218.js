function esTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }

    if (a + b > c && a + c > b && b + c > a) {
        return true;
    } else {
        return false;
    }
}

console.log(esTriangulo(3, 4, 5));
console.log(esTriangulo(1, 1, 3));
console.log(esTriangulo(7, 10, 5));
console.log(esTriangulo(4, 4, 4));
