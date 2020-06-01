"use strict";

function mphTokmph(mph){
	console.log("MPH value entered:",mph);
	return 1.61 * mph;

}
let speedLimit =mphTokmph(65);
console.log("Speed limit in km/h",speedLimit);

let mphTokmphArrow = mph =>{
	console.log("MPH value entered:",mph);
	return 1.61 * mph;
}
speedLimit = mphTokmphArrow(65);
console.log("Speed limit in km/h (arrow)",speedLimit);

let mphTokmphImplicit = mph => 1.61 * mph;

speedLimit = mphTokmphImplicit(65);
console.log("Speed limit in km/h (Implicit return)",speedLimit);

let triangleArea = (base,height) =>0.5 * base * height;
console.log("Area of a triangle  with base of 5 and height of 4",triangleArea(5,4));

 let functionCopy = triangleArea;

 console.log("Area of a triangle with the base of 8 and height of 14:",functionCopy(8,14));

 var x = function(f){return 5  * (f-32) / 9};
 // anonymous function
 console.log("50F in celsius is:",x(50));