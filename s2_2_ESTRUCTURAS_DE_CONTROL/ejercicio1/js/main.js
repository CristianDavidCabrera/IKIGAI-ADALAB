"use strict";

var age = prompt("Introduce tu edad.");

if (age > 30){
    alert('Tienes más de 30años');
}else if (age >= 20){
    alert('Tienes entre 20 y 30 años ');
}else if (age >= 10){
    alert('Tienes entre 10 y 19 años');
}else{
    alert('Eres un niño entre 0 y 9 años');
}

