let elemento = document.getElementById("numbers");

for (let k = 1; k <= 30; k++) {
    numeros.innerHTML += `<span>${k}</span>`;    
    numeros.classList.add("number");
}

console.log(elemento.innerHTML);
