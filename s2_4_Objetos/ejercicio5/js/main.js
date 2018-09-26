"use strict";

var infoUser = {};

var job = "developer";

infoUser.firstname = "Cristian";
infoUser.lastname = "Cabrera";
infoUser.age = 33;
infoUser.job= job;

console.log(infoUser);

infoUser.firstname = "Tiburcio";
infoUser.age = infoUser.age + 1;

console.log(infoUser);