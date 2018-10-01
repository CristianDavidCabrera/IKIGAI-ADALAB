//Metodo constructor.
function Usuario(nombre, apellido, telefono) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.telefono = telefono;
}

var user1 = new Usuario("Juan", "Cabrera", "928909090");

var user2 = new Usuario("Pedro", "Hernandez", "928808080");

var user3 = new Usuario("Carlos", "Vega", "928707070");

var user4 = new Usuario("Vicente", "Perdomo", "928606060");

var user5 = new Usuario("Juanito", "Alonso", "928505050");

var listUser = [user1, user2, user3, user4, user5];
var nombre = prompt("Introduzca un nombre");
searchName(nombre);

function searchName(nombre) {
  if (nombre == user5.nombre) {
      var nameInput = user5.nombre;
      var surnameInput = user5.apellido;
      var phoneInput = user5.telefono;

      document.getElementById("name").value = nameInput;
      document.getElementById("surname").value = surnameInput;
      document.getElementById("phone").value = phoneInput;
  } else if (nombre == user4.nombre) {
      var nameInput = user4.nombre;
      var surnameInput = user4.apellido;
      var phoneInput = user4.telefono;

      document.getElementById("name").value = nameInput;
      document.getElementById("surname").value = surnameInput;
      document.getElementById("phone").value = phoneInput;
  } else if (nombre == user3.nombre) {
      var nameInput = user3.nombre;
      var surnameInput = user3.apellido;
      var phoneInput = user3.telefono;

      document.getElementById("name").value = nameInput;
      document.getElementById("surname").value = surnameInput;
      document.getElementById("phone").value = phoneInput;
  } else if (nombre == user2.nombre) {
      var nameInput = user2.nombre;
      var surnameInput = user2.apellido;
      var phoneInput = user2.telefono;

      document.getElementById("name").value = nameInput;
      document.getElementById("surname").value = surnameInput;
      document.getElementById("phone").value = phoneInput;
  } else if (nombre == user1.nombre) {
      var nameInput = user1.nombre;
      var surnameInput = user1.apellido;
      var phoneInput = user1.telefono;

      document.getElementById("name").value = nameInput;
      document.getElementById("surname").value = surnameInput;
      document.getElementById("phone").value = phoneInput;
  } else {
    alert("User does not exist.");
  }
}

// We can doit better. 

// function searchName(nombre){
//   for(i=1; i<6; i++){
//     var user = "user"+i;
//     var userMain = user["nombre"];

//     if(nombre == userMain){
//       var nameInput = user.nombre;
//       var surnameInput = user.apellido;
//       var phoneInput = user.telefono;

//       document.getElementById('name').value = nameInput;
//       document.getElementById('surname').value = surnameInput;
//       document.getElementById('phone').value = phoneInput;
//     }else{
//       alert("ERROR");
//     }
//   }