let products = [
    {
      id: '1000',
      product: 'Fresas de Huelva',
      price: 410,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
    },
    {
      id: '1001',
      product: 'Kiwi amarillo',
      price: 245,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
    },
    {
      id: '1002',
      product: 'Manzana roja',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
    },
    {
      id: '1003',
      product: 'Manzana verde',
      price: 170,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
    },
    {
      id: '1004',
      product: 'Melón',
      price: 135,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
    },
    {
      id: '1005',
      product: 'Naranja valenciana',
      price: 160,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
    },
    {
      id: '1006',
      product: 'Pera conferencia',
      price: 210,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
    },
    {
      id: '1007',
      product: 'Plátano',
      price: 260,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
    },
    {
      id: '1008',
      product: 'Sandía',
      price: 115,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
    },
    {
      id: '1009',
      product: 'Uva',
      price: 195,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
    },
    {
      id: '1010',
      product: 'Aguacate',
      price: 415,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
    },
    {
      id: '1011',
      product: 'Cereza del Bierzo',
      price: 520,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
    },
    {
      id: '1012',
      product: 'Granada',
      price: 310,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
    },
    {
      id: '1013',
      product: 'Limón',
      price: 155,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
    },
    {
      id: '1014',
      product: 'Nectarina',
      price: 180,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
    },
    {
      id: '1015',
      product: 'Piña',
      price: 320,
      image: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
    },
  
]

let productos = document.getElementById("products-section");
let carrito = document.getElementById("cart-section");
let currentPage = 1;
let itemsPerPage = 6;

function productosfuncion(pagina) {
    productos.innerHTML = '';

    let startIndex = (pagina - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let mostrarproductos = products.slice(startIndex, endIndex);

    mostrarproductos.forEach(product => {
        let frutas = document.createElement('div');
        frutas.classList.add('frutas');
        productos.appendChild(frutas);

        let imagen = document.createElement('img');
        imagen.src = product.image;
        imagen.classList.add('imagen');
        frutas.appendChild(imagen);

        let nombre = document.createElement('p');
        nombre.textContent = product.product;
        nombre.classList.add('nombre');
        frutas.appendChild(nombre);

        let precioañadir = document.createElement('div');
        precioañadir.classList.add('precioañadir');

        let precio = document.createElement('p');
        precio.textContent = `${(product.price / 100).toFixed(2)}€/kg`;
        precio.classList.add('precio');
        precioañadir.appendChild(precio);

        let añadir = document.createElement('button');
        añadir.textContent = 'Añadir';
        añadir.classList.add('añadir');
        precioañadir.appendChild(añadir);

        frutas.appendChild(precioañadir);
    });

    paginas(pagina);
}

function paginas(currentPage) {
    let paginacion = document.createElement('div');
    paginacion.classList.add('paginacion');

    let totalPages = Math.ceil(products.length / itemsPerPage);

    let prevButton = document.createElement('button');
    prevButton.textContent = '◄';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            productosfuncion(currentPage);
        }
    });
    paginacion.appendChild(prevButton);

    let pageIndicator = document.createElement('span');
    pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
    paginacion.appendChild(pageIndicator);

    let nextButton = document.createElement('button');
    nextButton.textContent = '►';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            productosfuncion(currentPage);
        }
    });
    paginacion.appendChild(nextButton);

    productos.appendChild(paginacion);
}

productosfuncion(currentPage);


