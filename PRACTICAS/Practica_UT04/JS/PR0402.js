let monthsContainer = document.getElementById("months");
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (let k = 0; k < 12; k++) {
    let monthDiv = document.createElement("div");
    monthDiv.classList.add("month");

    let monthNumberDiv = document.createElement("div");
    monthNumberDiv.classList.add("month-number");

    monthNumberDiv.textContent = (k + 1).toString();
    let monthNameDiv = document.createElement("div");
    monthNameDiv.classList.add("month-name");
    monthNameDiv.textContent = monthNames[k];

    monthDiv.appendChild(monthNumberDiv);
    monthDiv.appendChild(monthNameDiv);
    monthsContainer.appendChild(monthDiv);
}

console.log(monthsContainer.innerHTML);