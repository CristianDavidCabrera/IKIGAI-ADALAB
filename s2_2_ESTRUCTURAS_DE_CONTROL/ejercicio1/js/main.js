"use strict";
/**
 *  Control de acceso.
 */

var name = prompt( "Introduce tu nombre" );

if (name !== "cristian"){
    alert( "Error. Acceso denegado" );
}else {
    alert( "Bienvenido " + name );
}
/**
 * Control de edad.
 */

var age = prompt( "¿qué edad tienes? " );

if (age > 30){
    alert( 'Tienes ' + age + ' años.' + ' Eres un/a adulto.' );
}else if (age >= 20){
    alert( 'Tienes ' + age + ' años.' + ' Eres un/a joven.' );
}else if (age >= 10){
    alert( 'Tienes ' + age + ' años.' + ' Eres un/a adolescente.' );
}else{
    alert( 'Tienes ' + age + ' años.' + ' Eres un/a niño/a.' );
}


