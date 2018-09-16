"use strict";

var adalaber1 = {};

adalaber1.name = "Maria";
adalaber1.age = 34;
adalaber1.profession = "journalist";

var adalaber2 = {};

adalaber2.name = "Rocio";
adalaber2.age = 25;
adalaber2.profession = "actress";

//add method run (without parameters)

adalaber1.run = function (){
  alert("I'm running.");
}
//add method run a marathon (with one parameter)
adalaber1.runAMarathon  = function(distance){
  alert("I'm runing a matahon " + distance +"km away");
}
// add method (whit parameters) 
adalaber1.showBio = function(name, age, profession){

  var nombre = adalaber1.name;
  var edad = adalaber1.age; 
  var profesion= adalaber1.profession;

  alert("My name is " + nombre + " ,I'm " + edad + " years and I'm a/an " + profesion + '.');
}

adalaber2.showBio = function(){
  // var nombre = adalaber2.name;
  // var edad = adalaber2.age; 
  // var profesion= adalaber2.profession;

  alert("My name is " + adalaber2.name + " ,I'm " + adalaber2.age + " years and I'm a/an " + adalaber2.profession + '.');
}