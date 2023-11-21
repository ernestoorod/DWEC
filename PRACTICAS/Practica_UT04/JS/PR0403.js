let elemento1 = document.getElementById("numbers");
let elemento2 = document.getElementById("months");
let nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let k = 1; k <= 30; k++) {
    let numeros = document.createElement("span");
    numeros.innerHTML += `<span>${k}</span>`;
    numeros.classList.add("number");
    elemento1.appendChild(numeros);
}

for (let i = 1; i <= 12; i++) {
    let numeros = document.createElement("div");
    numeros.innerHTML += `<div class="month-number">${i}</div>
    <div class="month-name">${nombreMes[i-1]}</div>`;
    numeros.classList.add("month");
    elemento2.appendChild(numeros);
}


