function containsObject(obj1, obj2) {
    for (var key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        if (!obj1.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  
  let usuario = {
    nombre: 'Ernesto',
    apellidos: 'Rodríguez Rodríguez'
  };
  
  let usuario1 = {
    apellidos: 'Rodríguez Rodríguez',
    sexo: 'Hombre'
  };
  
  let contieneObjeto = containsObject(usuario, usuario1);
  
  console.log(contieneObjeto);
  