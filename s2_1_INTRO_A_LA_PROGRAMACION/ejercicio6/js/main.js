/**
 * 
 * # Calulate total hours alive.
 * 
 * 
 */





// calcular el número total de horas vividas.
// 1 año (365 días) --> 8760 horas
// 1 día --> 24 horas

var bornDate;
var actualDate;

function timeAlive (bornDate, actualDate) {

    var date1 = new Date(bornDate.substring(0,4), bornDate.substring(5,7)-1, bornDate.substring(8,10), bornDate.substring(11,13), bornDate.substring(14,16), bornDate.substring(17,18));
    var date2 = new Date(actualDate.substring(0,4), actualDate.substring(5,7)-1, actualDate.substring(8,10), actualDate.substring(11,13), actualDate.substring(14,16), actualDate.substring(17,18));

    document.getElementById('date1').value = date1;
    document.getElementById('date2').value = date2;

    var alive = date2.getTime() - date1.getTime();

    var aliveHours = Math.round(alive/(1000*60*60));
    document.getElementById('alive').value =  aliveHours;
}

timeAlive("1985-02-03 15:00:00", "2018-09-13 11:18:00");


// /*
// 0 enero, 				31 dias
// 1 febrero, 			28/29 dias
// 2 marzo, 				31 dias
// 3 abril,				30 días
// 4 mayo,					31 días
// 5 junio,				30 días
// 6 julio,				31 días
// 7 agosto,				31 días
// 8 septiembre,		30 días
// 9 octubre,			31 días
// 10 noviembre,		30 días
// 11 diciembre,		31 días
