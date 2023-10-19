function countVowels(str) {
    str = str.toLowerCase();
    const vocales = 'aeiou';
    let contador = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vocales.includes(str[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const texto = "Comeme el pito";
  const vocalesContadas = countVowels(texto);
  console.log("Número de vocales: " + vocalesContadas);
  
  

