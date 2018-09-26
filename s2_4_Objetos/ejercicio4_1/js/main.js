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

// function cont(){
//     valueAdd();
//     valueSubtract();
// }

//Object Cont.

// function cont(valueInit, valueMin, valueMax, valueActual){
//     this.valueInit = valueInit;
//     this.valueMin = valueMin;
//     this.valueMax = valueMax;
//     this. valueActual =valueActual;
// }




var value1 = document.getElementById('num1').value;
console.log('num1');
var value2 = document.getElementById('num2').value;
console.log('num2');

// Method to Add
function valueAdd(value1, value2) {
    var num1 = parseInt(value1);
    var num2 = parseInt(value2);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = result;
    // return result;
    // console.log('result');
}

//Method to Subtract
function valueSubtract(value1, value2){
    var num1 = parseInt(value1);
    var num2 = parseInt(value2);
    var result = num1 - num2;
    document.getElementById('result').innerHTML = result;
    // return result;
    // console.log('result');
}







