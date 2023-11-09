  /*function addNif(arr) {
    for (let i = 0; i < arr.length; i++) {
      const dni = arr[i].dni;
  
      if (typeof dni === 'number' && dni >= 0 && dni <= 99999999) {
        const resto = dni % 23;
  
        const letrasNIF = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letraNIF = letrasNIF.charAt(resto);
  
        arr[i].nif = dni.toString() + letraNIF;
        delete arr[i].dni;

      }
    }
  }
  
  const arr = [
    {
      nombre: 'Pepe',
      ape1: 'Pérez',
      ape2: 'López',
      dni: 10100100,
      expediente: '1720',
      pass: '1234ABC',
      ciclo: 'DAW',
      notas: {
        DWEC: 7.8,
        DIW: 5.4,
        DWEC: 9.4
      }
    },
    {
      nombre: 'Juan',
      ape1: 'Mázquez',
      ape2: 'Hernández',
      dni: 7340831,
      expediente: '342',
      pass: 'P@ssw0rd',
      ciclo: 'DAW',
      notas: {
        DWEC: 8,
        DIW: 5.2,
        DWES: 4
      }
    }
  ];
  
  addNif(arr);
  
  console.log(arr);*/

let arr = [
  {
    nombre: 'Pepe',
    ape1: 'Pérez',
    ape2: 'López',
    dni: 10100100,
    expediente: '1720',
    pass: '1234ABC',
    ciclo: 'DAW',
    notas: {
      DWEC: 7.8,
      DIW: 5.4,
      DWEC: 9.4
    }
  },
  {
    nombre: 'Juan',
    ape1: 'Mázquez',
    ape2: 'Hernández',
    dni: 7340831,
    expediente: '342',
    pass: 'P@ssw0rd',
    ciclo: 'DAW',
    notas: {
      DWEC: 8,
      DIW: 5.2,
      DWES: 4
    }
  }
];
  
function addNif(arr){
  arr.forEach(usuario => {
    let nif = usuario.dni % 23;
    let letras ='TRWAGMYFPDXBNJZSQVHLCKE';
    usuario.nif = usuario.dni + letras[nif];
    delete usuario.dni;
  });
  return arr;
}

console.log(addNif(arr));
  
