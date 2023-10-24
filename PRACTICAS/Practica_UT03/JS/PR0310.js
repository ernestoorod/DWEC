function replaceWithPosition(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str
      .toLowerCase()
      .split('')
      .map(char => alphabet.indexOf(char) + 1)
      .filter(pos => pos > 0)
      .join(' ');
  }
  
  // Ejemplo
  console.log(replaceWithPosition('hola')); // '8 15 12 1'
  