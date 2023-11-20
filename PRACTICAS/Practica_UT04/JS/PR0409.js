let totalmils = 0;
let secs = 0;
let mins = 0;
let mils = 0;

function updateTime(){
    totalmils += 100;
    let mils = (totalmils % 1000).toFixed(0).padStart(2, '0');
    let secs = ((totalmils/1000) % 60).toFixed(0).padStart(2, '0');
    let mins = ((totalmils/1000) /60).toFixed(0).padStart(2, '0');

    document.getElementById('mils').textContent = mils;
    document.getElementById('secs').textContent = secs;
    document.getElementById('mins').textContent = mins; 
};

document
.getElementById('start')
.addEventListener('click', e =>{
    interval = setInterval(updateTime,45);
});

document
.getElementById('stop')
.addEventListener('click', e =>{
    clearInterval(interval);
});

document
.getElementById('reset')
.addEventListener('click', e =>{
    totalmils = 0;
});
   