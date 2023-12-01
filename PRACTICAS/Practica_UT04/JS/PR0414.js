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

function addToCart(product) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    const quantitySpan = document.createElement('span');
    quantitySpan.textContent = '1'; 
    const productNameSpan = document.createElement('span');
    productNameSpan.textContent = product.product;
    const productPriceSpan = document.createElement('span');
    productPriceSpan.textContent = `$${product.price}`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function () {
        cartItem.remove();
    });

    cartItem.appendChild(quantitySpan);
    cartItem.appendChild(productNameSpan);
    cartItem.appendChild(productPriceSpan);
    cartItem.appendChild(deleteButton);
    cartItems.appendChild(cartItem);
}


function createProductNode(product) {

    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    const productName = document.createElement('h2');
    productName.textContent = product.product;
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.product;
    const productPrice = document.createElement('p');
    productPrice.textContent = `Precio: $${product.price}`;
    const addButton = document.createElement('button');
    addButton.textContent = 'Añadir';
    addButton.addEventListener('click', function () {
        addToCart(product);
    });

    productDiv.appendChild(productName);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addButton);
    return productDiv;
}


function displayProducts() {
    const productsSection = document.getElementById('products-section');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const productNode = createProductNode(product);
        productsSection.appendChild(productNode);
    });
}

window.onload = function () {
    displayProducts();
};