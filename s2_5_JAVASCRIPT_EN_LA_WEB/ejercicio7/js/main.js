let name = prompt("Pelase!! Introduce a name");
let nombre = document.querySelector(".main");
if (name == "Cris") {
  nombre.classList.add("primary-color");
} else if (name == "Ale") {
  nombre.classList.add("secondary-color");
} else {
  nombre.classList.add("default-color");
}
