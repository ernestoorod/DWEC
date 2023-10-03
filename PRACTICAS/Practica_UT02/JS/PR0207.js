const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingrese un número entero: ', (input) => {
  const num = parseInt(input);
  
  if (!isNaN(num) && num > 0) {
    for (let i = 1; i <= num; i++) {
      console.log('*'.repeat(i));
    }
  } else {
    console.log('Por favor, ingrese un número entero positivo.');
  }

  rl.close();
});


