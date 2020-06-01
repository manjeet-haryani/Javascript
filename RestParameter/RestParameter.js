"use strict";

let add;
function sum(x,y){
	add = x +y;
	return add;
}
let addition = sum (1,2,3,4);

console.log(addition);

let add1;
function sums(...nums){
	add1 = 0;
	for(var num of nums){
		add1 += num;
	}
	return add1;
}
let addition1 = sums (1,2,3,4);

console.log(addition1);

function studentDetails(...courses){
	console.log("Name of the student is:" + name);
	let sub;
	for (sub=0; sub < courses.length; sub++){
		console.log(courses[sub]);
	}
}
studentDetails("chris","Javascript","Python","Scala");
