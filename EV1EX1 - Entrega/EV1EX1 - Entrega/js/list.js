// ESTE ES EL ÚNICO FICHERO QUE PUEDES MODIFICAR PARA REALIZAR EL EXAMEN

function renderMovies(){

const movies = document.getElementById('movies-list');

    data
        .forEach(element => {
        let movie = document.createElement('div');
        movie.classList.add('movie');
        movie.addEventListener('click', console.log("Has hecho click ")); {
            movie.innerHTML = `
            <div class="title">${title}</div>`
        };
    });
}

renderMovies();