"use strict";
let numbers =[10,20,30,40];
let[a,b,c,d] = numbers;
console.log("values after the first assignment (no rest paramaeters):\n");

console.log("value of a :"+ a);
console.log("value of b :"+ b);
console.log("value of c :"+ c);
console.log("value of d :"+ d);

[a, b, c]= numbers;

console.log("values after the second assignment (no rest parameters):\n");

console.log("value of a :"+ a);
console.log("value of b :"+ b);
console.log("value of c :"+ c);

[a, ...b] = numbers;

console.log("values after [a, ...b] = numbers:\n");

console.log("value of a :"+ a);
console.log("value of b :"+ b);

[, ...a] = numbers

console.log("values after [, ...a] = numbers:\n");

console.log("value of a :"+ a);
