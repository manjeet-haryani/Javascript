"use strict";
alert("Alert Message")

let name = prompt ("The prompt message is: \n Please enter your name:");
console.log("You have entered" + name);

let Subject = prompt (" Please enter your Subject name", "Javasccript");
console.log("You have entered" + Subject);

let a = prompt ("Enter a number to get square value");
let b = a * a;
alert("square value of "+a+ "is:"+b);

let output = confirm("COnfirmation Messsage:\n Ready to move to the next demo?");
if(output)
{
	console.log("You pressed OK");
}
else{
	console.log("You pressed cancel");
}