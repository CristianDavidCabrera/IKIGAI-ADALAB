"use strict";

function calculador(tipo, ancho, padding, border) {
  if (tipo == true) {
    var valor = ancho - padding - border;
    return valor;
  } else {
    var valor = ancho + padding + border;
    return valor;
  }
}
var variable = calculador();
console.log("Resultado: " + variable);

//border box --> sumamos padding y border.
// content box
