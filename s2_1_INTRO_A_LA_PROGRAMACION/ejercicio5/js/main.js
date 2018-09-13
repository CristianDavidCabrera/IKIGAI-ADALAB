
//si un año es divisible entre 100 pero no entre 400 por ejemplo 1900 no es un año bisiesto.

function calculaBisiesto(){

    var anyoActual = document.getElementById('anyo').value;

    
    if ((anyoActual%400) == 0){
        alert("Es bisiesto.");
    }else if(((anyoActual%4) == 0)&&((anyoActual%100) != 0)){
        alert("Es bisiesto.");
    }else{
        alert("No es bisiesto.");
    }
}

