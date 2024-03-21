let nombresCompletos = ['Victor González Rodríguez', 'Pepe Pérez Fernández'];

function obtenerNombres(arr) {
    let resultados = [];

    arr.forEach(nombreCompleto => {
        let nombres = nombreCompleto.split(' ');
        let nombre = nombres[0];
        let apellidos = nombres.slice(1).join(' ');
        
        resultados.push({
            Nombre: nombre,
            Apellidos: apellidos
        });
    });

    return resultados;
}

console.log(obtenerNombres(nombresCompletos));
