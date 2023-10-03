let num;
do{
    let num = prompt("Dime un numero");
}while (num = null || isNaN(Number(num)) || num == '' || Number(num)<0);

console.log((num % 2 == 0)? "Par":"Impar");