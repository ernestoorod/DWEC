for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");

  div.classList.add('cuadros');

  div.textContent = i;

  div.addEventListener('click', izquierda);
  div.addEventListener('contextmenu', derecha);

  document.body.appendChild(div);

  if (i % 10 === 0) {
    document.body.appendChild(document.createElement('br'));
  }
}

function izquierda(event) {
  if (event.target.style.backgroundColor === 'blue') {
    event.target.style.backgroundColor = 'white';
  } else {
    event.target.style.backgroundColor = 'blue';
  }
}

function derecha(event) {
  event.preventDefault();

  event.target.style.backgroundColor = 'red';

  event.target.removeEventListener('click', izquierda);
  event.target.removeEventListener('contextmenu', derecha);
}

