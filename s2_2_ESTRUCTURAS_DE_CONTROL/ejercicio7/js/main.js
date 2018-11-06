"use strict";

//version 1
var alturaArbol =prompt("¿que altura deseas que tenga el árbol?");

console.log("*");
var text = ""; 
for (var i = 0; i < alturaArbol; i++) {
    for (var j = 0; j <= i; j++) {
        text +=("▲");
    }
    console.log(text);
    text="";
}
console.log("|");
    
//version 2 + Bonus 1 

// var stars= ["*","▲", "▲▲", "▲▲▲", "▲▲▲▲", "▲▲▲▲▲", "▲▲▲▲▲▲","▲▲▲▲▲▲▲" ,"▲▲▲▲▲▲▲▲","|"];
// var space ="";
//   for (var i = 0; i < 0; i++) {
//         console.log(space + stars[i] + "\n");
//   }

//version 3

// var stars= ["*","▲", "▲▲", "▲▲▲", "▲▲▲▲", "▲▲▲▲▲", "▲▲▲▲▲▲","▲▲▲▲▲▲▲" ,"▲▲▲▲▲▲▲▲","|"];
// var space ="";
// stars.forEach(element=>space+=element+"\n");
// console.log(space);


//