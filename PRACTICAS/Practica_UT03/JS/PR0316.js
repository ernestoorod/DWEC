function createPow(arr, pow) {
    return arr.map(num => Math.pow(num, pow));
  }
  
  // Ejemplos
  console.log(createPow([1, 3, 5], 4));    // [1, 81, 625]
  console.log(createPow([1, 2, 4, 9], 3)); // [1, 8, 64, 729]
  