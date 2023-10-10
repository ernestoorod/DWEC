function mergeObjects(obj1, obj2) {
  let mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}

let nombre = {
  nombre: 'Ernesto'
};

let apellidos = {
  apellidos: 'Rodríguez Rodríguez'
};

let mergedData = mergeObjects(nombre, apellidos);

console.log(mergedData);
 
