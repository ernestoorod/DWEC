function countLetters(str) {
    const resultado = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      
      if (/[a-z]/.test(char)) {
        if (resultado[char]) {
          resultado[char]++;
        } else {
          resultado[char] = 1;
        }
      }
    }
  
    return resultado;
  }
  
  console.log(countLetters('Hola, me llamo Ernesto'));
  

  
  
  
  
