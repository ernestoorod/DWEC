function removeUndefined(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === undefined) {
        delete obj[key];
      }
    }
  }

  const objeto = {
    nombre: 'John',
    edad: 30,
    ciudad: undefined,
    trabajo: 'Desarrollador'
  };
  
  removeUndefined(objeto);
  console.log(objeto);
  