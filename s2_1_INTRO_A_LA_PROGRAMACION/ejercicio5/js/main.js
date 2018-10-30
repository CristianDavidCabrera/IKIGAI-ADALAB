//si un año es divisible entre 100 pero no entre 400 por ejemplo 1900 no es un año bisiesto.

function calculaBisiesto() {
  var anyoActual = document.getElementById("anyo").value;

  if (anyoActual % 400 == 0) {
    alert("Este año es bisiesto.");
  } else if (anyoActual % 4 == 0 && anyoActual % 100 != 0) {
    alert("Este año es bisiesto.");
  } else {
    alert("Este año no es bisiesto.");

    var actualizarAnyo = anyoActual;
    actualizarAnyo++;

    while( !(actualizarAnyo % 400 == 0) && !(actualizarAnyo % 4 == 0 && actualizarAnyo % 100 != 0) ){
      actualizarAnyo++;
    }
    alert("El proximo año bisiesto será el año " + actualizarAnyo);
  }
}
