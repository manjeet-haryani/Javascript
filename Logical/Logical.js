"use strict ";

let x = 10;
let y = 12;
console.log("value of x || y :=",x || y);
console.log("value of x && y :=",x && y);
console.log("value of x ^ y :=",x ^ y);
console.log("value of x & y :=",x & y);

if (x>=9 && y<=13)
	console.log("x + y=",x +y);

let a = 15, b = 20;

if (a > 20 || y<25)
	console.log("a + b=",a +b);

var result = !(x==y);
console.log("Result of !(x==y) is:-",result);

let condition;
console.log("condition =", condition = (100 > 10) ? true : false);
console.log("condition =" ,condition = (100 < 10) ? true : false);

let maxvalue;
console.log("maxvalue =", maxvalue=(100 > 10) ? 100 :10);
