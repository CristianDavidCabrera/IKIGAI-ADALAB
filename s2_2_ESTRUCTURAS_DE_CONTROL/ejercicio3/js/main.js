"use strict";

var edad = prompt("Introduce la edad del perro.");
var edadPerruna;

if (edad == 1) {
  edadPerruna = 15;
  alert("La edad perruna equivale a " + edadPerruna + " años humanos." );
} else if (edad == 2) {
  edadPerruna = 15 + 9;
  alert("La edad perruna equivale a " + edadPerruna + " años humanos." );
} else if (edad == 3) {
  edadPerruna = 15 + 9 + 5;
  alert("La edad perruna equivale a " + edadPerruna + " años humanos." );
} else{
  edadPerruna = 15 + 9 + 5 * (edad - 2);
  alert("La edad perruna equivale a " + edadPerruna + " años humanos." );
}


