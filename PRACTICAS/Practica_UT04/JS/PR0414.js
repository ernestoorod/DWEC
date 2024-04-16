document.addEventListener("DOMContentLoaded", function() {
  const productsPerPage = 8;
  let currentPage = 1;
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

  let cart = [];

  const productsSection = document.getElementById('products-section');
  const cartItemsTable = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const totalPages = Math.ceil(products.length / productsPerPage);

  function showProducts(page) {
      const startIndex = (page - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const displayedProducts = products.slice(startIndex, endIndex);

      productsSection.innerHTML = '';

      displayedProducts.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.classList.add('product');

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = product.product;
          productDiv.appendChild(img);

          const productName = document.createElement('p');
          productName.textContent = product.product;
          productName.classList.add('product-name');
          productDiv.appendChild(productName);

          const priceAndAddDiv = document.createElement('div');
          priceAndAddDiv.classList.add('price-and-add');

          const productPrice = document.createElement('p');
          productPrice.textContent = `${(product.price / 100).toFixed(2)}€/kg`;
          productPrice.classList.add('product-price');
          priceAndAddDiv.appendChild(productPrice);

          const addButton = document.createElement('button');
          addButton.textContent = 'Añadir';
          addButton.classList.add('add-button');
          addButton.dataset.id = product.id;
          addButton.addEventListener('click', addToCart);
          priceAndAddDiv.appendChild(addButton);

          productDiv.appendChild(priceAndAddDiv);

          productsSection.appendChild(productDiv);
      });
  }

  function addToCart(event) {
      const productId = event.target.dataset.id;
      const productToAdd = products.find(product => product.id === productId);

      if (productToAdd) {
          const existingCartItem = cart.find(item => item.id === productId);
          if (existingCartItem) {
              existingCartItem.quantity++;
          } else {
              cart.push({ ...productToAdd, quantity: 1 });
          }
          renderCart();
      }
  }

  function renderCart() {
      cartItemsTable.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.quantity}</td>
              <td>${item.product}</td>
              <td>${(item.price * item.quantity / 100).toFixed(2)}€</td>
          `;
          cartItemsTable.appendChild(row);
          total += item.price * item.quantity;
      });

      cartTotal.textContent = `${(total / 100).toFixed(2)}€`;
  }

  function Paginacion() {
      const paginationDiv = document.createElement('div');
      paginationDiv.classList.add('pagination');

      const prevButton = document.createElement('button');
      prevButton.textContent = '◄';
      prevButton.addEventListener('click', () => {
          if (currentPage > 1) {
              currentPage--;
              showProducts(currentPage);
              Paginacion();
          }
      });
      paginationDiv.appendChild(prevButton);

      // const pageIndicator = document.createElement('span');
      // pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
      // paginationDiv.appendChild(pageIndicator);

      const nextButton = document.createElement('button');
      nextButton.textContent = '►';
      nextButton.addEventListener('click', () => {
          if (currentPage < totalPages) {
              currentPage++;
              showProducts(currentPage);
              Paginacion();
          }
      });
      paginationDiv.appendChild(nextButton);

      const productsContainer = document.getElementById('main');
      productsContainer.appendChild(paginationDiv);
  }

  showProducts(currentPage);
  Paginacion();

  
});
