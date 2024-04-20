let productos = [
  {
    id: '1000',
    producto: 'Fresas de Huelva',
    precio: 410,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/fresas.jpg',
  },
  {
    id: '1001',
    producto: 'Kiwi amarillo',
    precio: 245,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/kiwis.jpg',
  },
  {
    id: '1002',
    producto: 'Manzana roja',
    precio: 195,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_rojas.jpg',
  },
  {
    id: '1003',
    producto: 'Manzana verde',
    precio: 170,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/manzanas_verdes.jpg',
  },
  {
    id: '1004',
    producto: 'Melón',
    precio: 135,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/melones.jpg',
  },
  {
    id: '1005',
    producto: 'Naranja valenciana',
    precio: 160,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/naranjas.jpg',
  },
  {
    id: '1006',
    producto: 'Pera conferencia',
    precio: 210,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/peras.jpg',
  },
  {
    id: '1007',
    producto: 'Plátano',
    precio: 260,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/platanos.jpg',
  },
  {
    id: '1008',
    producto: 'Sandía',
    precio: 115,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/sandias.jpg',
  },
  {
    id: '1009',
    producto: 'Uva',
    precio: 195,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/uvas.jpg',
  },
  {
    id: '1010',
    producto: 'Aguacate',
    precio: 415,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/aguacate.jpg',
  },
  {
    id: '1011',
    producto: 'Cereza del Bierzo',
    precio: 520,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/cereza.jpg',
  },
  {
    id: '1012',
    producto: 'Granada',
    precio: 310,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/granada.jpg',
  },
  {
    id: '1013',
    producto: 'Limón',
    precio: 155,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/limon.jpg',
  },
  {
    id: '1014',
    producto: 'Nectarina',
    precio: 180,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/nectarina.jpg',
  },
  {
    id: '1015',
    producto: 'Piña',
    precio: 320,
    imagen: 'https://vgonzalez165.github.io/dwec/assets/pr0414/imgs/pineapple.jpg',
  },
];

let seccionProductos = document.getElementById("products-section");
let seccionCarrito = document.getElementById("cart-section");
let paginaActual = 1;
let productosPorPagina = 8;
let cantidadModal = document.getElementById("cantidad");

function dibujarProductos(pagina) {
  seccionProductos.innerHTML = '';

  let indiceInicio = (pagina - 1) * productosPorPagina;
  let indiceFin = indiceInicio + productosPorPagina;
  let productosAMostrar = productos.slice(indiceInicio, indiceFin);

  productosAMostrar.forEach(producto => {
    let fruta = document.createElement('div');
    fruta.classList.add('frutas');
    seccionProductos.appendChild(fruta);

    let imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.classList.add('imagen');
    fruta.appendChild(imagen);

    let nombre = document.createElement('p');
    nombre.textContent = producto.producto;
    nombre.classList.add('nombre');
    fruta.appendChild(nombre);

    let precioAñadir = document.createElement('div');
    precioAñadir.classList.add('precioañadir');

    let precio = document.createElement('p');
    precio.textContent = `${(producto.precio / 100).toFixed(2)}€/kg`;
    precio.classList.add('precio');
    precioAñadir.appendChild(precio);

    let añadir = document.createElement('button');
    añadir.textContent = 'Añadir';
    añadir.classList.add('añadir');
    añadir.dataset.productoNombre = producto.producto;
    añadir.dataset.productoId = producto.id;
    añadir.addEventListener('click', () => {
      mostrarModal(añadir.dataset.productoNombre, añadir.dataset.productoId);
    });
    precioAñadir.appendChild(añadir);

    fruta.appendChild(precioAñadir);
  });

  paginas(pagina);
}

function paginas(paginaActual) {
  let paginacion = document.createElement('div');
  paginacion.classList.add('paginacion');

  let totalPaginas = Math.ceil(productos.length / productosPorPagina);

  let atras = document.createElement('button');
  atras.textContent = '◄';
  atras.addEventListener('click', () => {
    if (paginaActual > 1) {
      paginaActual--;
      dibujarProductos(paginaActual);
    }
  });
  paginacion.appendChild(atras);

  let indicador = document.createElement('span');
  indicador.textContent = `Página ${paginaActual} de ${totalPaginas}`;
  paginacion.appendChild(indicador);

  let adelante = document.createElement('button');
  adelante.textContent = '►';
  adelante.addEventListener('click', () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      dibujarProductos(paginaActual);
    }
  });
  paginacion.appendChild(adelante);

  seccionProductos.appendChild(paginacion);
}



function mostrarModal(nombreProducto, idProducto) {
  let modal = document.getElementById('modal');
  modal.style.display = 'block';

  let nombreProductoModal = document.getElementById('nombre_producto');
  nombreProductoModal.textContent = nombreProducto;

  let existe = carrito.find(item => item.id === idProducto);
  if (existe) {
    cantidadModal.value = existe.cantidad;
  } else {
    cantidadModal.value = 1;
  }

  let añadirAlCarritoBoton = document.getElementById('añadir_al_carrito');
  
  añadirAlCarritoBoton.addEventListener('click', añadirAlCarritoClick);

  function añadirAlCarritoClick() {
    let cantidad = parseInt(cantidadModal.value);
    let existeEnCarrito = carrito.find(item => item.id === idProducto);
    if (existeEnCarrito) {
      let diferencia = cantidad - existeEnCarrito.cantidad;
      agregarAlCarrito(idProducto, diferencia);
    } else {
      agregarAlCarrito(idProducto, cantidad);
    }
    cerrarModal();
    
    añadirAlCarritoBoton.removeEventListener('click', añadirAlCarritoClick);
  }
}

function cerrarModal() {
  let modal = document.getElementById('modal');
  modal.style.display = 'none';
}

document.querySelector('.cerrar').addEventListener('click', cerrarModal);

let carrito = [];

function agregarAlCarrito(idProducto, cantidad) {
  let productoAAgregar = productos.find(producto => producto.id === idProducto);

  if (productoAAgregar) {
    let itemExistente = carrito.find(item => item.id === idProducto);
    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      carrito.push({ ...productoAAgregar, cantidad: cantidad });
    }
    dibujarCarrito();
  }
}

function eliminarDelCarrito(idProducto) {
  let indice = carrito.findIndex(item => item.id === idProducto);
  if (indice !== -1) {
    carrito.splice(indice, 1);
    dibujarCarrito();
  }
}

function dibujarCarrito() {
  let cuerpoCarrito = document.getElementById('cart-body');
  let celdaTotal = document.getElementById('total-amount');
  let total = 0;

  cuerpoCarrito.innerHTML = '';

  carrito.forEach(item => {
    let filaItem = document.createElement('tr');

    let celdaCantidad = document.createElement('td');
    celdaCantidad.textContent = item.cantidad;
    filaItem.appendChild(celdaCantidad);

    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = item.producto;
    filaItem.appendChild(celdaNombre);

    let celdaTotalProducto = document.createElement('td');
    let totalItem = item.precio * item.cantidad;
    total += totalItem;
    celdaTotalProducto.textContent = `${(totalItem / 100).toFixed(2)}€`;
    filaItem.appendChild(celdaTotalProducto);

    let celdaEliminar = document.createElement('td');
    let eliminarBoton = document.createElement('button');
    eliminarBoton.classList.add('eliminar-icono');
    eliminarBoton.textContent = 'Eliminar';
    eliminarBoton.addEventListener('click', () => {
      eliminarDelCarrito(item.id);
    });
    celdaEliminar.appendChild(eliminarBoton);
    filaItem.appendChild(celdaEliminar);

    cuerpoCarrito.appendChild(filaItem);
  });

  celdaTotal.textContent = `${(total / 100).toFixed(2)}€`;
}

dibujarProductos(paginaActual);
