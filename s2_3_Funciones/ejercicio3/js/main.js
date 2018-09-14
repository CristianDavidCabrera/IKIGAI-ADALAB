"use strict";

function calcularIVA(precio, iva){

  if(iva == true){
    var precioImpuesto = (0.21 * precio) + precio;
    console.log(precioImpuesto);
    return precioImpuesto;
  } else{
    var precioNoImpuesto = precio;
    console.log(precioNoImpuesto);
    return precioNoImpuesto;
  }
}