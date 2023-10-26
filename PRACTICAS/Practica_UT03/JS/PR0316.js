function createPow(arr, pow) {
    return arr.map(num => Math.pow(num, pow));
  }

  console.log(createPow([1, 3, 5], 4));
  console.log(createPow([1, 2, 4, 9], 3));
  