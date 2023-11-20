let evento=document.querySelector('.navegadores');
evento.addEventListener('mouseover',metodo_1);
evento.addEventListener('mouseout',metodo_2);
evento.addEventListener('click',metodo_3);

function metodo_1(){
   evento.style.backgroundColor='red';
   evento.style.color='white';
}

function metodo_2(){
   evento.style.backgroundColor='black';
   evento.style.color='yellow';
}

function metodo_3(){
   evento.style.backgroundColor='pink'
   evento.style.color='black';
}