"use strict";

var num = prompt("Introduce un número.");

if (num == 0) {
  alert("El número es 0.");
} else if (num < 0) {
  alert("El número es negativo.");
} else if (num % 2 == 0 && num % 3 == 0) {
  alert("El número es múltiplo de 2 y de 3");
} else if (num > 20 && num < 50) {
  alert("El número es mayor que 20 pero menor que 50.");
} else {
  alert("El número no es 123123125.");
}
