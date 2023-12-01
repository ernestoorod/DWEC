function getAlumnosByCiclo(str) {
  let alumnos = [];
  
  for (let obj of arr) {
    if (obj.ciclo === str) {
      let fullName = obj.nombre + ' ' + obj.ape1 + ' ' + obj.ape2;
      alumnos.push(fullName);
    }
  }
  
  return alumnos;
}

getAlumnosByCiclo('DAW');
