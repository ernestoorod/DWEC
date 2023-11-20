// Declarar algunas variables al principio del script.js
let currentPage = 0; // Variable que almacena la página actual mostrada.
let elementsPerPage = 5; // Número de elementos a mostrar por página.
let filter = ''; // Variable que almacena el filtro de búsqueda.
let paginasTotales;  // Variable que almacenará el total de páginas después de filtrar.

function renderCharacters() {
    // Obtener la lista de personajes del documento HTML.
    let list = document.getElementById('people-list-characters');
    // Limpiar el contenido actual de la lista.
    list.innerHTML = "";
    
    // Filtrar los personajes según el nombre y la paginación actual.
    data
        .filter(({ name }) => name.toLowerCase().includes(filter))
        .filter((item, index) => {
            return Math.trunc(index / elementsPerPage) == currentPage;
        })
        .forEach(({ name: charName, birth_year, homeworld }) => {
            // Agregar elementos HTML para mostrar los detalles del personaje.
            list.innerHTML += `
                <div class="character">
                    <div class="character-name">${charName}</div>
                    <div class="character-birth-year">${birth_year ? birth_year : '-'}</div>
                    <div class="character-homeworld">${homeworld.name ? homeworld.name : '-'}</div> 
                    <div class="btn btn-char" data-nombrecaracter="${charName}">Detalle</div> 
                </div>
            `;
        });
    
    // Calcular el total de páginas después de aplicar el filtro.
    paginasTotales = Math.ceil((data.filter(({ name }) => name.toLowerCase().includes(filter)).length) / elementsPerPage);
    
    // Actualizar el texto que muestra la página actual y el total de páginas.
    document.querySelector("#pages span:nth-child(3)").textContent = `Pagina ${currentPage + 1} de ${paginasTotales}`;
    
    // Cargar los botones de detalle para cada personaje.
    cargarBotones();
}

function handleFilterClick(e) {
    // Obtener el valor del filtro y actualizar la página actual.
    filter = document.getElementById("filter-text")
        .value
        .trim()
        .toLowerCase();
    currentPage = 0;
    // Volver a renderizar la lista de personajes con el nuevo filtro.
    renderCharacters();
}

function cargarBotones() {
    // Obtener todos los botones de detalle y agregar un evento de clic a cada uno.
    let detalleBoton = document.querySelectorAll(".character div:last-child");
    detalleBoton.forEach(detalle => {
        detalle.addEventListener('click', boton => {
            // Obtener el nombre del personaje asociado al botón y mostrar sus propiedades.
            let nombreCaracter = boton.currentTarget.getAttribute("data-nombrecaracter");
            aniadirPropiedades(nombreCaracter);
        });
    });
}

function aniadirPropiedades(nombreCaracter) {
    // Mostrar el nombre del personaje en la sección de detalles.
    document.getElementById("detail-name").innerHTML = nombreCaracter;

    // Encontrar el objeto del personaje en el conjunto de datos.
    let personaje = data.find(({ name }) => name == nombreCaracter);

    // Mostrar propiedades del personaje en la sección de detalles.
    document.getElementById("height").innerHTML = `${personaje.height} cm.`;
    document.getElementById("mass").innerHTML = `${personaje.mass} kg.`;
    let colorPelo = personaje.hair_color ? personaje.hair_color : '-';
    document.getElementById("hair-color").innerHTML = (colorPelo !== '-') ? translate_colors[colorPelo].name : colorPelo;
    document.getElementById("hair-color-filled").style.backgroundColor = (colorPelo !== '-') ? translate_colors[colorPelo].code : 'black';

    let colorOjos = personaje.eye_color ? personaje.eye_color : '-';
    document.getElementById("eye-color").innerHTML = (colorOjos !== '-') ? translate_colors[colorOjos].name : colorOjos;
    document.getElementById("eye-color-filled").style.backgroundColor = (colorOjos !== '-') ? translate_colors[colorOjos].code : "grey";
    document.getElementById("birth-year").innerHTML = personaje.birth_year ? personaje.birth_year : "-";
    document.getElementById("homeworld").innerHTML = personaje.homeworld.name ? personaje.homeworld.name : '-';
    document.getElementById("population").innerHTML = personaje.homeworld.population ? personaje.homeworld.population : '-';
}


// Agregar un evento de clic al botón de filtro.
document.querySelector(".btn-filter")
    .addEventListener('click', handleFilterClick);

// Crear la estructura HTML para mostrar la paginación.
document.getElementById("pages").innerHTML = `<span class="first">Primera</span>
    <span class="prev">Anterior</span>
    <span>Pagina ${currentPage + 1} de ${paginasTotales || 1}</span>
    <span class="next">Siguiente</span>
    <span class="last">Última</span>`

// Agregar eventos de clic a los botones de paginación.
document.querySelector("#pages .first").addEventListener('click', () => {
    currentPage = 0;
    renderCharacters();
});

document.querySelector("#pages .next").addEventListener('click', () => {
    currentPage = (currentPage < paginasTotales - 1) ? currentPage + 1 : currentPage;
    renderCharacters();
});

document.querySelector("#pages .prev").addEventListener('click', () => {
    currentPage = (currentPage > 0) ? currentPage - 1 : currentPage;
    renderCharacters();
});

document.querySelector("#pages .last").addEventListener('click', () => {
    currentPage = paginasTotales - 1;
    renderCharacters();
});

// Inicializar la renderización de personajes al cargar la página.
renderCharacters();

