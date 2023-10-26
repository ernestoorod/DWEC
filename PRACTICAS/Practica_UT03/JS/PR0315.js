function getOdd(arr) {
    return arr.filter(function(num) {
      return num % 2 !== 0;
    });
  }
  
  console.log(getOdd([1, 4, 5, 34, 75, 2]));
  
  