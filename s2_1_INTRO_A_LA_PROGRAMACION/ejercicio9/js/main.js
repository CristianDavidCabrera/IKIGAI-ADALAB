"use strict";

var costBill = prompt('The bill, please');
var guests = prompt('How many guests are you?');

var bill= parseInt(costBill);
var numGuests = parseInt(guests);

var splitBill = bill / numGuests;


alert('The total bill is ' + bill + '€ and individual bill is ' + splitBill + '€ per person.');