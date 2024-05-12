let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let latitud = document.getElementById('latitud').value;
    let longitud = document.getElementById('longitud').value;
    let api = document.getElementById('api').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${api}&lang=es`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let descripciontiempo = data.weather[0].description;
        let tiempo = document.getElementById('tiempo');
        tiempo.innerHTML = `<h1>El tiempo es : ${descripciontiempo}</h1>`;
    })
    .catch(error =>{
        console.log('Hay un error al dar el tiempo, vuelve a poner los datos', error)
        let tiempo = document.getElementById('tiempo');
        tiempo.innerHTML = `<p>Hay un error al dar el tiempo, vuelve a poner los datos</p>`;
    })
});