"use strict";
/**
 * 
 * # Counter 
 * - valueInit: Valor inicial del contador.
 * - valueMax: Valor máximo del contador.
 * - valueActual: Valor actual del contador.
 * - valueMin: Valor mínimo del contador.
 * 
 * # valueAdd()
 * - Method to add two values and show the result.
 * 
 * #valueSubtract()
 * - Method to subtract two values and show the result.
 * 
 */


 // Object Counter
var miContador = new Object();

miContador.valueInit = 0;
miContador.valueMax = 1000;
miContador.valueActual = 0;
miContador.valueMin = -1000;



// var prop = 'valueActual';
// alert(miContador[prop]);


// start counter
function startCount(obj) {
    valueIncrease();
    valueDecrease();
    
}

// Method to Add
function valueIncrease(obj) {

    miContador.valueInit = 0;
    miContador.valueMax = 1000;
    miContador.valueActual =+1;
    miContador.valueMin = -1000;
    alert(miContador.valueActual);

    document.getElementById('counter').innerHTML.value = miContador.valueActual+1; 
    // console.log(miContador.valorActual);
    
}

//Method to Subtract
function valueDecrease(obj){

    miContador.valueInit = 0;
    miContador.valueMax = 1000;
    miContador.valueActual =-1;
    miContador.valueMin = -1000;
    alert(miContador.valueActual);

    document.getElementById('counter').innerHTML = miContador.valueActual-1; 
    
}

// Method to Reset counter
function valueReset(){
    miContador.valueInit = 0;
    miContador.valueMax = 1000;
    miContador.valueActual = 0;
    miContador.valueMin = -1000;
    alert(miContador.valueActual);
}


