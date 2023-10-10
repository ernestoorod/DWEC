function getFibonacciAt(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return getFibonacciAt(n - 1) + getFibonacciAt(n - 2);
    }
}

console.log(getFibonacciAt(6));
