function generateNumbers() {
    let numbersDiv = document.getElementById("numbers");
    let htmlContent = "";

    for (let i = 1; i <= 30; i++) {
        htmlContent += `<span class='number'>${i}</span>`;
    }

    numbersDiv.innerHTML = htmlContent;
}

generateNumbers();

