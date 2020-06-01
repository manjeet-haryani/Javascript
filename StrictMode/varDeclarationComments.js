"use Srict";
var price1 = 5;
var price2 = 10;
var total = price1 + price2;
console.log ("Sum of price1 and price2",total);

//RE-directing the variables with var

var price1 = 500;
var price2 = 310;
var total = price1 + price2;
console.log ("Sum of redeclared price1 and price2",total);

//Assign value using let keyword
let dividend = 420;
let divisor = 20;
console.log("The divison result:",dividend/divisor);

//update value using let keyword
dividend = 720;
divisor = 30;
console.log("The updated divison result:",dividend/divisor);

/*let does not permit re-dedclaration 
once a variable has been declared with let,
it can be updtae but not redeclared

let dividend = 880;
let divisor = 40;
console.log("The  divison result after declaration:",dividend/divisor);
*/
/* The const keyword represents the constants 
constants can only be defined once.
Updates and redinition are not permitted
*/
const MY_BIRTHDAY = '26.01.1997';
console.log("My birthday is on :",MY_BIRTHDAY);

//variable hoisting
// when using var, a varianble can be used beforeinitialization
//This is known as variable hoisiting
a  = 5;
console.log("The value of a ",a);
var a;
//with let and const, variable hoisting is not possible

/*ab  = 5;
console.log("The value of ab ",ab);
let ab;

abc  = 5;
console.log("The value of abc ",abc);
const abc;
*/


