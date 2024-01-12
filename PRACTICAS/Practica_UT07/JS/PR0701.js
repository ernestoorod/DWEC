fetch('https://swapi.dev/api/planets/')
    .then(response => response.json())
    .then(data => {

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

            //Terreno
            let terreno = document.createElement('td');
            terreno.textContent = planet.terrain;
            fila.appendChild(terreno);

            //Poblacion
            let poblacion = document.createElement('td');
            poblacion.textContent = planet.population;
            fila.appendChild(poblacion);

            //Gravedad
            let gravedad = document.createElement('td');
            gravedad.textContent = planet.gravity;
            fila.appendChild(gravedad);

            planetTableBody.appendChild(fila);
        });
    })
    
.catch(error => console.log('Error al obtener datos de la API de Star Wars:', error));