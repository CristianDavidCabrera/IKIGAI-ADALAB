/**
 * 
 * 1 - Referencia del elemento del DOM.
 * 2 - Se añade una escucha (con un evento (mouseover) 
 *     y una funcion que se ejecutará cuando ocurra el evento).
 * 
 * 3 - Función para añadir un elemento. 
 * 4 - Crea un nuevo p
 * 5 - y crea contenido     
 * 6 - y añade el contenido creado al elemento creado.
 * 7 - Inserta el elemento con su contenido 
 *     antes del elemento referenciado incialmente 
 *     y al que lleva asociado el listener.
 * 
 */

var p = document.getElementById("parrafo"); //1
p.addEventListener('mouseover', addNewP); //2

function addNewP (){ //3

    var newP = document.createElement("p"); //4
    var newContent = document.createTextNode ("Novum caput...") //5
    newP.appendChild(newContent); //6

    document.body.insertBefore(newP, p);// 7
}
