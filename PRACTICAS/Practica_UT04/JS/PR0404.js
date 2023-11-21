

document.addEventListener("DOMContentLoaded", function() {

    let paragraphs = document.getElementsByTagName("p");
    

    let parrafosElement = document.getElementById("parrafos");
    parrafosElement.textContent = paragraphs.length;
    

    let links = document.getElementsByTagName("a");
    let segundoEnlaceElement = document.getElementById("segundo-enlace");
    segundoEnlaceElement.textContent = links[1].href;
    

    let linksGoogleEs = document.querySelectorAll('a[href="https://www.google.es"]');
    let linksGoogleEsElement = document.getElementById("links-google-es");
    linksGoogleEsElement.textContent = linksGoogleEs.length;
    

    let segundoParrafo = paragraphs[1];
    let palabrasSegundoParrafo = segundoParrafo.textContent.split(" ").length;
    let palabrasSegundoParrafoElement = document.getElementById("palabras-segundo-parrafo");
    palabrasSegundoParrafoElement.textContent = palabrasSegundoParrafo;
});
