"use strict";
let studentGrades =["A","B",3,"D",5];

console.log("Length :"+studentGrades.length);
console.log("Element at index 3:",studentGrades[3]);
console.log("Element at index -3:",studentGrades[-3]);
console.log("Iterating over elements with old syntax:\n");
var i;
for(i=0;i<studentGrades.length;i++){
	console.log(studentGrades[i]);
}

console.log("Iterating over elements with ES6 syntax:\n");
var i;
for(i in studentGrades){
	console.log(studentGrades[i]);
}


var j;
console.log("Elements in vowels:");
let vowels = new Array("A","E","I","O","U");
for (i of vowels){
	console.log(i);
}


let grades =[];
grades[0]= "a";
grades[1]= "e";
grades[2]= "i";
grades[3]= "o";
grades[4]= "u";
grades[7]= "h";
console.log("length: ",grades.length);

console.log("Elements in the grades array:\n");
for(i of grades){
	console.log(i);
}

console.log(`\n The elements at index 5 and 6 :${grades[5]} and ${grades[6]}`);

let testScores =[43,54,61,81,91,89];

function flagGoodScore(score){
	if(score > 70){
		console.log(`the score of${score} is good!`);
	}
}
console.log("Iterating over the test scores with ForEach:");
testScores.forEach(flagGoodScore);