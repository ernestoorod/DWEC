document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let ciudad = document.getElementById('nombreciudad').value;
    let api = document.getElementById('api').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&units=metric&appid=${api}`)
        .then(response => response.json())
        .then(data => {
            datostiempo(data);
        })
        .catch(error => {
            console.error('Error al obtener datos del clima:', error);
        });
});

function datostiempo(data) {
    document.getElementById('textoinformacion').textContent = `Informacion del Tiempo en ${data.name}`;
    document.getElementById('descripcion').textContent = `Descripción del tiempo: ${data.weather[0].description}`;
    document.getElementById('icono').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
    document.getElementById('temperatura').textContent = `Temperatura: ${data.main.temp}°C`;
    document.getElementById('humedad').textContent = `Humedad: ${data.main.humidity}%`;
    document.getElementById('informacion').classList.remove('hidden');
}

