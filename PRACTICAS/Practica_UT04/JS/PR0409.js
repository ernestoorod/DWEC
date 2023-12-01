const boardElement = document.getElementById('board');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let row = 1; row <= 8; row++) {
    for (let col = 0; col < 8; col++) {
        const cell = document.createElement('span');
        cell.classList.add('cell');
        cell.setAttribute('id', `${letters[col]}${row}`);
        boardElement.appendChild(cell);
    }
}

const cells = document.getElementsByClassName('cell');
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        const coord = this.id;
        alert(`Has pulsado en la casilla ${coord}`);
    });
}

