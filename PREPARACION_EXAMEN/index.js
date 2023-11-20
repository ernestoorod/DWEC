function containsObject(a, b) {
  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

let usuario1 = {
  nombre: 'Ernesto',
  apellidos: 'Rodríguez Rodríguez'
};

let usuario2 = {
  apellidos: 'Rodríguez Rodríguez',
  sexo: 'Hombre'
};

console.log(containsObject(usuario1,usuario2));