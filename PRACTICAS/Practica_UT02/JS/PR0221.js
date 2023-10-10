function isNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(parseFloat(str));
}

console.log(isNumber('234.43'));
console.log(isNumber('siete'));
console.log(isNumber('    34 '));
console.log(isNumber('23a'));
     
