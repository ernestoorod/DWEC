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

function dibujarproductos(pagina) {
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
      añadir.dataset.id = product.id;
      añadir.addEventListener('click', addToCart);
      precioañadir.appendChild(añadir);

      frutas.appendChild(precioañadir);
  });

  paginas(pagina);
}

function paginas(currentPage) {
  let paginacion = document.createElement('div');
  paginacion.classList.add('paginacion');

  let totalPages = Math.ceil(products.length / itemsPerPage);

  let atras = document.createElement('button');
  atras.textContent = '◄';
  atras.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          productosfuncion(currentPage);
      }
  });
  paginacion.appendChild(atras);

  let indicador = document.createElement('span');
  indicador.textContent = `Página ${currentPage} de ${totalPages}`;
  paginacion.appendChild(indicador);

  let alante = document.createElement('button');
  alante.textContent = '►';
 alante.addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          productosfuncion(currentPage);
      }
  });
  paginacion.appendChild(alante);

  productos.appendChild(paginacion);
}

function añadircarro(event) {
  let productId = event.target.dataset.id;
  let productToAdd = products.find(product => product.id === productId);

  if (productToAdd) {
      let existingCartItem = cart.find(item => item.id === productId);
      if (existingCartItem) {
          existingCartItem.quantity++;
      } else {
          cart.push({ ...productToAdd, quantity: 1 });
      }
      dibujarcarro();
  }
}

let cart = [];

function dibujarcarro() {
  carrito.innerHTML = '';

  let total = 0;

  let table = document.createElement('table');
  table.classList.add("cart-table");
  let header = table.createTHead();
  let row = header.insertRow();
  let headers = ['Producto', 'Cantidad', 'Precio'];
  headers.forEach(headerText => {
      let th = document.createElement('th');
      th.textContent = headerText;
      row.appendChild(th);
  });

  let body = table.createTBody();
  cart.forEach(item => {
      let itemRow = body.insertRow();

      let nameCell = itemRow.insertCell();
      nameCell.textContent = item.product;

      let quantityCell = itemRow.insertCell();
      quantityCell.textContent = item.quantity;

      let totalCell = itemRow.insertCell();
      let itemTotal = item.price * item.quantity;
      total += itemTotal;
      totalCell.textContent = `${(itemTotal / 100).toFixed(2)}€`;
  });

  carrito.appendChild(table);

  let totalRow = body.insertRow();
  let totalCell = totalRow.insertCell();
  totalCell.colSpan = 2;
  totalCell.textContent = 'Total';
  let totalAmountCell = totalRow.insertCell();
  totalAmountCell.textContent = `${(total / 100).toFixed(2)}€`;
}

dibujarproductos(currentPage);
