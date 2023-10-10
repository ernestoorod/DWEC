function intersectObjects(obj1, obj2) {
    var result = {};
  
    for (var key in obj1) {
      if (obj2.hasOwnProperty(key)) {
        result[key] = obj2[key];
      }
    }
  
    return result;
  }

let usuario = {
    nombre: 'Ernesto',
    apellidos: 'Rodríguez Rodríguez'
};
  
let usuario1 = {
    apellidos: 'Rodríguez Rodríguez',
    sexo: 'Hombre'
};

let intersectData = intersectObjects(usuario, usuario1);

console.log(intersectData);



  
  