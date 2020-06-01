"use strict";
let str_double_quotes = "JAVASCRIPT";
let str_single_quotes = "Programming language";

console.log("Welcome to" + str_double_quotes);
console.log("It is a" + str_single_quotes );

let str_back_sticks = `Is ${str_double_quotes} a ${str_single_quotes} ?`
console.log("String with back ticks: ",str_back_sticks);

let sum = `${1+2+3}`
console.log(`The Expression evaluated to a value of ${sum}.`);
console.log("The Expression evaluated to a value of ${sum}.");

let sentence = "I \"love\"spinach"
console.log("String defined with the escape characters:", sentence);

let multiline_str =
`				This is a 
				string which
				spans multiple lines`;
console.log("A multiple-line string :\n", multiline_str);


var name_str1 = "Dravid";
var name_str2 = "Dravid";

var name_obj1 = new String("Dravid");
var name_obj2 = new String("Dravid");

console.log("Type of name_str1",typeof name_str1);
console.log("Type of name_obj1",typeof name_obj1);

console.log("IS name_str1 == name_str2?", name_str1==name_str2);
console.log("IS name_str1 == name_obj1?", name_str1==name_obj1);
console.log("IS name_obj1 == name_obj2?", name_obj1==name_obj2);
console.log("IS the value of name_obj1 double equal to value of  name_obj2?:", name_obj1.valueOf()==name_obj2.valueOf());


console.log("IS name_str1 === name_str2?", name_str1===name_str2);
console.log("IS name_str1 === name_obj1?", name_str1===name_obj1);
console.log("IS name_obj1 === name_obj2?", name_obj1===name_obj2);
console.log("IS the value of name_obj1 double equal to value of  name_obj2?:", name_obj1.valueOf()===name_obj2.valueOf());

let empName = "Manjeet Haryani";

console.log("Number of characters in empName is :" + empName.length);
console.log("index of n is:" + empName.indexOf("n"));
console.log("'an' occurs at poition :" + empName.search("an"));

var line ="Fundamentals of javascript";

console.log("Original line:",line);
console.log("Slice(1,12)",line.slice(1,12));
console.log("Slice(-23,-15)",line.slice(-23,-15));
console.log("Slice(13)",line.slice(13));

console.log("Replacing 'Javascript' with 'Web Programming'",
 	line.replace("Javascript","Web Programming"));

console.log("Replacing 'javascript' with 'Python'",
 	line.replace("javascript","Python"));

console.log("Replacing 'javascript/i' with 'Python'",
 	line.replace(/javascript/i,"Python"));

console.log("Default replace of 'a' with 'A':",
 	line.replace("a","A"));

console.log("Global replace of 'a' with 'A':",
	line.replace(/a/i,"A"));

console.log("Splitting the line on space: ",
	line.split(" "));
var myString = "			Hey,this is Javascript 		";

console.log("Before the trim operation :" + myString);
console.log("After the trim operation :" + myString.trim());
