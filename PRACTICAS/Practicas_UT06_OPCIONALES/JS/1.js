document.addEventListener('DOMContentLoaded', function() {
    let pantalla = document.getElementById('pantalla');
    let botones = document.querySelectorAll('.calculadora input[type="button"]');
    let NumerosOperaciones = [];
    let resultadoAnterior = false;
    let ultimoResultado = 0;

    limpiarPantalla();

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            let valor = this.value;
            if (['+', '-', '*', '/'].includes(valor)) {
                if (resultadoAnterior) {
                    pantalla.value = ultimoResultado + valor;
                    NumerosOperaciones.push(ultimoResultado, valor);
                    resultadoAnterior = false;
                } else if (['+', '-', '*', '/'].includes(NumerosOperaciones[NumerosOperaciones.length - 1])) {
                    NumerosOperaciones[NumerosOperaciones.length - 1] = valor;
                } else {
                    pantalla.value += valor;
                    NumerosOperaciones.push(valor);
                }
            } else {
                if (resultadoAnterior) {
                    limpiarPantalla();
                    resultadoAnterior = false;
                }
                pantalla.value += valor;
                NumerosOperaciones.push(valor);
            }
        });
    });

    function limpiarPantalla() {
        pantalla.value = '';
        NumerosOperaciones = [];
    }

    function borrarUltimo(){
        pantalla.value = pantalla.value.slice(0, -1);
        NumerosOperaciones.pop();
    }

    function calcular() {
        try {
            ultimoResultado = eval(pantalla.value);
            pantalla.value = ultimoResultado;
            NumerosOperaciones.push('=');
            resultadoAnterior = true;
        } catch(err) {
            pantalla.value = 'Error';
        }
    }

    document.addEventListener('keydown', function(event) {
        let tecla = event.key;
        if (tecla >= '0' && tecla <= '9' || tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/' || tecla === '.' || tecla === '=' || tecla === 'Enter' || tecla === 'Backspace' || tecla === 'Delete' || tecla === 'Escape') {
            if (tecla === 'Enter' || tecla === '=') {
                calcular();
            } else if (tecla === 'Backspace') {
                borrarUltimo();
            } else if (tecla === 'Delete') {
                limpiarPantalla();
            } else if (tecla === 'Escape') {
                limpiarPantalla();
            } else {
                pantalla.value += tecla;
                NumerosOperaciones.push(tecla);
                resultadoAnterior = false;
            }
        }
    });
});