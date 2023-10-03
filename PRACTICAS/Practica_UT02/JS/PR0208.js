const añoNacimiento = prompt("Por favor, introduce tu año de nacimiento:");
const añoNacimientoNumero = parseInt(añoNacimiento);

if (añoNacimientoNumero >= 1994 && añoNacimientoNumero <= 2010) {
  alert("Perteneces a la Generación Z.");
} else if (añoNacimientoNumero >= 1981 && añoNacimientoNumero <= 1993) {
  alert("Perteneces a la Generación Millennial.");
} else if (añoNacimientoNumero >= 1969 && añoNacimientoNumero <= 1980) {
  alert("Perteneces a la Generación X.");
} else if (añoNacimientoNumero >= 1949 && añoNacimientoNumero <= 1968) {
  alert("Perteneces a la Generación Baby Boomer.");
} else {
  alert("Tu año de nacimiento está fuera de las fechas indicadas en la tabla.");
}
