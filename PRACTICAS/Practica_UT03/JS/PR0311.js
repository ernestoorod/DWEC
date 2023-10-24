function ascendDescend(len, min, max) {
    let sequence = '';
    for (let i = 0; i < len; i++) {
      sequence += String(min + i);
      if (min + i === max) {
        // Start descending
        for (let j = max - 1; j > min; j--) {
          sequence += String(j);
        }
      }
    }
    return sequence;
  }
  
  // Ejemplos
  console.log(ascendDescend(8, 2, 7)); // '23456765'
  console.log(ascendDescend(10, 2, 5)); // '2345432345'
  