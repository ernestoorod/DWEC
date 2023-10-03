let n = prompt("Dime un numero")
let mayor=n;
let menor=n;
for (let i=1; i<5; i++){
    let n = prompt("Dime un numero")
    if(n > mayor){
        mayor = n;
    }

    if(n < menor){
        menor = n;
    }
}

console.log(`El numero menor es ${menor} y el mayor es ${mayor}`);