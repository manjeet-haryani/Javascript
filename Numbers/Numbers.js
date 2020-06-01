"use strict";

let n = 123;
console.log("value of integer n =",n);

n = 12.35;
console.log("redefined value of n is =",n);

console.log("124e4=",124e4);
console.log("124e-4=",124e-4);

console.log("20 * '20'=",20 * "20");
console.log("'20' * 20=","20" * 20);

console.log("Infinity =",Infinity);

console.log("POSITIVE Infinity WILL RETURN=",Number.POSITIVE_INFINITY);
console.log("1/0 =",1/0);

console.log("NEGATIVE Infinity WILL RETURN=",Number.NEGATIVE_INFINITY);
console.log("Infinity =",-1/0);

console.log("String divided by integer: =","A String"/ 2);

console.log("valur of 0xEF",0xEF);

var num = 10;

console.log("The binary value of 16 is", num.toString(2));
console.log("The octal value of 16 is", num.toString(8));
console.log("The decimal value of 16 is", num.toString(10));
console.log("The hexadecimal value of 16 is", num.toString(16));
console.log("The duo trigesimal or base-32 value of 16 is", num.toString(32));
console.log("The binary value of 16 is", num.toString(2));

var a = 10;
console.log("Type of number before toString() :", typeof a);

var b = a.toString();
console.log("Type of number after toString() :", typeof b); 

var x = 3.4567;

console.log("3.4567 rounded to 0 decimals : ",x.toFixed(0));
console.log("3.4567 rounded to 2 decimals : ",x.toFixed(2));
console.log("3.4567 rounded to 5 decimals : ",x.toFixed(5));

var y = 25.6798;
console.log("value of 25.6798 without specifying precision: ",y.toPrecision());
console.log("value of 25.6798 when precision is 2: ",y.toPrecision(2));
console.log("value of 25.6798 when precision is 5: ",y.toPrecision(5));


console.log("MAX_VALUE will return:",Number.MAX_VALUE);
console.log("MIN_VALUE will return:",Number.MIN_VALUE);
