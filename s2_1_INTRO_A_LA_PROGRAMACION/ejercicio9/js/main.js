"use strict";

var costBill = prompt('The bill, please');
var guests = prompt('How many guests are you?');

/* El prompt devuelve siempreun string. 
Con parseInt() pasamos de texto a número para poder operar. */

var bill= parseInt(costBill);
var numGuests = parseInt(guests);
var splitBill = bill / numGuests;

alert('The total bill is ' + bill + '€ and individual bill is ' + splitBill + '€ per person.');