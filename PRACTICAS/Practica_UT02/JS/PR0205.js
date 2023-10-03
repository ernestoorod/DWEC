while (true) {
    var input = prompt("Por favor, introduce un número:");
    var numero = parseFloat(input);

    if (!isNaN(numero)) {
        alert("Has introducido el número " + numero);
        break;
    } else {
        alert("Eso no es un número válido. Por favor, intenta de nuevo.");
    }
}
