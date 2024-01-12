document.addEventListener("DOMContentLoaded", function () {
    const planetTableBody = document.getElementById('planetTableBody');
    const currentPageElement = document.getElementById('currentPage');
    const totalPagesElement = document.getElementById('totalPages');
    let currentPage = 1;

    const fetchPlanets = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                currentPage = getCurrentPageNumber(url);
                updatePageInfo(currentPage, data.count);

                planetTableBody.innerHTML = ''; 

                let planetas = data.results;
                planetas.forEach(planet => {
                    let fila = document.createElement('tr');

                   // Nombre del planeta
                   let nombre = document.createElement('td');
                   nombre.textContent = planet.name;
                   fila.appendChild(nombre);

                   // Clima
                   let clima = document.createElement('td');
                   clima.textContent = planet.climate;
                   fila.appendChild(clima);

                   // Terreno
                   let terreno = document.createElement('td');
                   terreno.textContent = planet.terrain;
                   fila.appendChild(terreno);

                   // Poblacion
                   let poblacion = document.createElement('td');
                   poblacion.textContent = planet.population;
                   fila.appendChild(poblacion);

                   // Gravedad
                   let gravedad = document.createElement('td');
                   gravedad.textContent = planet.gravity;
                   fila.appendChild(gravedad);


                    planetTableBody.appendChild(fila);
                });
            })
            .catch(error => console.log('Error al obtener datos de la API de Star Wars:', error));
    };

    const getCurrentPageNumber = (url) => {
        const urlParams = new URLSearchParams(url);
        return urlParams.get('page') || 1;
    };

    const updatePageInfo = (currentPage, totalItems) => {
        const itemsPerPage = 10;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        currentPageElement.textContent = currentPage;
        totalPagesElement.textContent = totalPages;
    };

    const loadPlanets = (direction) => {
        const apiUrl = 'https://swapi.dev/api/planets/';
        const pageParam = `?page=${direction === 'prev' ? currentPage - 1 : currentPage + 1}`;
        const url = direction === 'prev' ? apiUrl + pageParam : apiUrl;

        fetchPlanets(url);
    };

    fetchPlanets('https://swapi.dev/api/planets/');
});
