let galeria = document.getElementById('galeria');
let gif = document.getElementById('gif');
let page = 1;
let loading = false;

async function cogerfotos() {
    return fetch(`https://picsum.photos/list?page=${page}`)
        .then(respuesta => respuesta.json());
}

function mostrarGIF() {
    gif.style.display = 'inline';
}

function ocultarGIF() {
    gif.style.display = 'none';
}

function mostrarfotos() {
    if (loading) return;
    loading = true;

    mostrarGIF();
    
    cogerfotos()
    
    .then(data => {
        let contador = 0;
        for (let photo of data) {
            if (contador < 3) {
                let imagen = document.createElement('img');
                imagen.classList.add("imagen")
                imagen.src = `https://picsum.photos/1500/1500?image=${photo.id='49'}`;
                galeria.appendChild(imagen);
                contador++;
            }
        }
        page++;
    })
    
    .catch(error => {
        console.log('Error al obtener las fotos:', error);
    })
        
    .finally(() => {
        ocultarGIF();
        loading = false;
    });

    // .then((mail) => {
    //     console.log(mail);
    // })
    // .catch((err) => {
    //     console.error(err);
    // })
    // .finally(() => {
    //     console.log('Experiment completed');
    // });
}

function scroll() {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        mostrarfotos();
    }

}

window.addEventListener('scroll', scroll);

mostrarfotos();
