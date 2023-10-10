function calc(operando1, operando2, operador) {
    switch (operador) {
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            if (operando2 !== 0) {
                return operando1 / operando2;
            } else {
                return "Error: División por cero";
            }
        case '^':
            return Math.pow(operando1, operando2);
        case '%':
            return operando1 % operando2;
        default:
            return "Error: Operador no válido";
    }
}

console.log(calc(5, 7, '*'));  // 35
console.log(calc(1, 0, '+'));  // 1
console.log(calc(9, 3, '/'));  // 3
console.log(calc(10, 2, '%')); // 0
console.log(calc(3, 2, '^'));  // 9
console.log(calc(5, 0, '/'));  // Error: División por cero
console.log(calc(4, 2, '&'));  // Error: Operador no válido
