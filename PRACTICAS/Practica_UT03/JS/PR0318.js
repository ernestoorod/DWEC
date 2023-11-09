function max(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    
    return arr.reduce(function (currentMax, num) {
      return num > currentMax ? num : currentMax;
    }, arr[0]);
  }
  
  const numbers = [51, 22, 9, 18, 5, 6];
  const maxValue = max(numbers);
  console.log("El valor máximo es:", maxValue);
  