/**
 * 
 * 1 - Referencia del elemento del DOM.
 * 2 - Se añade una escucha (con un evento (click) 
 *     y una funcion que se ejecutará cuando ocurra el evento).
 * 
 * 3 - Función para mostrar un mensaje. 
 *     Toma el valor del elemento refeneciado del DOM (en este caso un input) 
 *     y muestra un mensaje con el texto Hola más el valor del input.
 * 
 */

var button = document.getElementById("btn"); //1
button.addEventListener('click', showMessage); //2

function showMessage(){ //3
    var msn = document.getElementById("message").value;
    alert("Hola " + msn);
}
