document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const apiKey = document.getElementById('apiKey').value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        document.getElementById('weatherInfo').innerHTML = `<p>El tiempo actual es: ${weatherDescription}</p>`;
      })
      .catch(error => {
        console.error('Error al obtener el tiempo:', error);
        document.getElementById('weatherInfo').innerHTML = '<p>Ocurrió un error al obtener el tiempo. Por favor, verifica los datos ingresados y tu API Key.</p>';
      });
  });