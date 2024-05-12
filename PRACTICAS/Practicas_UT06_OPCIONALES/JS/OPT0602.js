let pantalla = document.querySelector(".pantalla");
let botones = document.querySelectorAll(".btn");
let NumerosOperaciones = [];
let seRealizoOperacion = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        let botonApretado = boton.textContent;

        console.log(NumerosOperaciones);

        if (boton.id === "c") {
            pantalla.textContent = "0";
            NumerosOperaciones = [];
            seRealizoOperacion = false;
            return;
        };

        if (boton.id === "igual") {
            try {
                let resultado = eval(NumerosOperaciones.join(''));
                pantalla.textContent = resultado;
                NumerosOperaciones = [resultado.toString()];
                seRealizoOperacion = true;
                
            } catch {
                pantalla.textContent = "Error!";
                NumerosOperaciones = [];
                seRealizoOperacion = false;
            };
            return;
        };

        if (['+', '-', '*', '/'].includes(botonApretado)) {
            if (seRealizoOperacion) {
                pantalla.textContent = NumerosOperaciones;
                NumerosOperaciones = [pantalla.textContent, botonApretado];
                seRealizoOperacion = false;
            } else if (['+', '-', '*', '/'].includes(NumerosOperaciones[NumerosOperaciones.length - 1])) {
                NumerosOperaciones[NumerosOperaciones.length - 1] = botonApretado;
                
            } else {
                pantalla.textContent += botonApretado;
                NumerosOperaciones.push(botonApretado);
            };

        } else {

            if (pantalla.textContent === "0" || pantalla.textContent === "Error!" || seRealizoOperacion) {
                pantalla.textContent = botonApretado;
            } else {
                pantalla.textContent += botonApretado;
            };

            if (seRealizoOperacion) {
                NumerosOperaciones = [botonApretado];
                seRealizoOperacion = false;
            } else {
                NumerosOperaciones.push(botonApretado);
            };
        };
    });
});
