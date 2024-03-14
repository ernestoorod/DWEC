let arr = ['Victor González Rodríguez', 'Ernesto Rodriguez Rodriguez'];

function getNames(arr) {
    let resultado = [];

    for (let i = 0; i < arr.length; i++) {
        let partes = arr[i].split('');
        let nombre = partes[0];
        let apellidos = partes.slice(1).join('');
        resultado.push({ nombre, apellidos });
    }

    return resultado;
}

console.log(getNames(arr));
