function removeUndefined(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === undefined) {
        delete obj[key];
      }
    }
  }

  const objeto = {
    nombre: 'Ernesto',
    edad: 21,
    ciudad: 'Leon',
    trabajo: undefined
  };
  
  removeUndefined(objeto);
  console.log(objeto);
  