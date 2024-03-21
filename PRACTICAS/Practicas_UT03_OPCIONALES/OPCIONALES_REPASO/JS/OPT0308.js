let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [4, 5, 7, 10];

function arrayDiff(a, b) {
    return a.filter(numero => !b.includes(numero));
}

console.log(arrayDiff(array1, array2));
