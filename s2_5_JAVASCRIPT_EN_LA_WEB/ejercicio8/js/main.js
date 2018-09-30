var titulo = document.getElementById("titulo");
var msn = document.getElementById("mensaje");
var status = document.getElementById("main");

var correcto = status.getElementById("main").classList.contains("success");
var error = status.getElementById("main").classList.contains("error");
var aviso = status.classList.contains("warning");

if (correcto) {
  titulo.innerHTML = "CORRECTO";
  msn.innerHTML = "Los datos son correctos";
} else if (error) {
  titulo.innerHTML = "ERROR";
  msn.innerHTML = "Ha surgido un error";
} else if (aviso) {
  titulo.innerHTML = "AVISO";
  msn.innerHTML = "Tenga cuidado";
}
