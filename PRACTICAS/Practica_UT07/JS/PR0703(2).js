let url = "https://swapi.dev/api/planets/";
let option = {
    method: "GET",
}
let urlAnterior;
let urlsiguiente;

document.getElementById("Anterior")
.addEventListener('click', paginaAnterior)


document.getElementById("Siguiente")
.addEventListener('click', paginaSiguiente)

function Informacion(){
fetch(url, option)
    .then(resul => resul.json())
    .then(response => {
        data = response;
        console.log(data);

        planetTableBody.innerHTML = "";

        data.results.forEach(planet => {
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

            urlAnterior = data.previous;
            urlsiguiente = data.next;
        });
 
});
}

function paginaAnterior(){
    if(urlAnterior){
        url=urlAnterior
        Informacion()
    }
}

function paginaSiguiente(){
    if(urlsiguiente){
        url=urlsiguiente
        Informacion()
    }
}

Informacion();
