"use strict";

var time = new Date();
console.log("Curent time : \n",time);

time = new Date(2020, 5,25,19,58,24);
console.log("Year, Month, Day, hour, min, sec:\n ",time);


time = new Date("May 25,2020");
console.log("Initialized with a date string:\n",time);

time = new Date("2020-05-25");
console.log("Initialized with (yyy-mm-dd):\n",time);


time = new Date();
console.log("my timezone offest in minutes:",
	time.getTimezoneOffset());

console.log("The UTC time is :",time.toUTCString());
