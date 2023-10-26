function sendMessage(arr) {
    arr.forEach(user => {
      console.log(`Hola, ${user}, bienvenido al curso de DWEC.`);
    });
  }

  console.log(sendMessage(['ernesto','luis', 'juan']));