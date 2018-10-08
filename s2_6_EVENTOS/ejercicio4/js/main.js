/**
 * 
 * Crear una página vacía que pulsa la tecla 'r' se pone en marcha el fondo rojo 
 * y el pulsar la 'b' ponga el fondo de la web azul. 
 * Vamos a ecuchar evento de teclado (directamente sobre el elemento documento).
 * 
 */

window.addEventListener("keydown", function(event) {
 var key = this.event.key;
    var body = document.getElementById("container"); 
    if (key === "r") {
      body.classList.add("red-class");
    } else if (key === "b") {
      body.classList.add("blue-class");
    }
});
