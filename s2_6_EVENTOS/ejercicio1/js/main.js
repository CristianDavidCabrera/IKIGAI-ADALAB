/**
 * 
 * 1 - Referencia del elemento del DOM que queremos manipular.
 * 2 - Se añade una escucha (con un evento (click) 
 *     y una funcion que se ejecutará cuando ocurra el evento).
 * 
 * 3 - Función para cambiar el contenido de un parrafo. 
 *     Inserta la nueva cadena de texto (Hello) en elemento referenciado del DOM (en este caso un parrafo).  
 * 
 */

var button = document.getElementById("btn"); //1
button.addEventListener('click', changeMessage); //2

function changeMessage(){
    document.getElementById("parrafo").innerHTML = "Hello";//3
}
