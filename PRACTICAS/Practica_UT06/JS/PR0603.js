for (let i = 1; i <= 100; i++) {
    let div = document.createElement("div");
  
    div.classList.add('cuadros');
  
    div.textContent = i;
  
    div.addEventListener('click', toggleSelection);
    div.addEventListener('contextmenu', markRed);
  
    document.body.appendChild(div);
  
    if (i % 10 === 0) {
      document.body.appendChild(document.createElement('br'));
    }
  }
  
  function toggleSelection(event) {
    if (event.target.style.backgroundColor === 'blue') {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = 'blue';
    }
  
    alert(`Número: ${event.target.textContent}`);
  }
  
  function markRed(event) {
    event.preventDefault();
  
    event.target.style.backgroundColor = 'red';
  
    event.target.removeEventListener('click', toggleSelection);
    event.target.removeEventListener('contextmenu', markRed);
  }
  