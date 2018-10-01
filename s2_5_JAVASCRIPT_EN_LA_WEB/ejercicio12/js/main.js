var p = document.getElementById("parrafo");

//altura del div
var h = p.offsetHeight;
console.log(h);

//un tercio de la altura del div
x = h / 3;
console.log(x);

// Añado el atributo al html
p.setAttribute("style", "height:" + x + "px");
