
let globallet ="This is a global variable declared with let keyword" ;
var globalvar ="This is a global variable declared with var keyword" ;

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;

function firstFunction(){
	
	let locallet ="This is a local variable declared with let keyword" ;
	var localvar ="This is a local variable declared with var keyword" ;	
	undeclaredLocalVar = "This is an undeclared variable";
	
	console.log("globalvar from inside firstFunction",globalvar);
	console.log("globallet fron inside firstFunction",globallet);

	console.log("numLet from inside firstFunction",numLet);
	console.log("numVar fron inside firstFunction",numVar);
	console.log("NUM_CONST from inside firstFunction",NUM_CONST);

	console.log("localLet from inside firstFunction",locallet);
	console.log("localVar fron inside firstFunction",localvar);
	console.log("undeclaredLocalVar from inside firstFunction",undeclaredLocalVar);


}

firstFunction();

	console.log("globalvar from inside firstFunction",globalvar);
	console.log("globallet fron inside firstFunction",globallet);

	console.log("numLet from inside firstFunction",numLet);
	console.log("numVar fron inside firstFunction",numVar);
	console.log("NUM_CONST from inside firstFunction",NUM_CONST);

	//console.log("locallet from outside the function :",locallet)
	//console.log("localvar from outside the function :",localvar);
	//console.log("undeclaredLocalVar from outside the function :",undeclaredLocalVar);
	
	
function secondFunction(){
	let numLet = 100;
	var numVar = 200;
	let NUM_CONST = 300;

	console.log("Redeclared numLet from inside secondFunction",numLet);
	console.log("Redeclared numVar fron inside secondFunction",numVar);

}

secondFunction();

	console.log("numLet from outside after invoking secondFunction",numLet);
	console.log("numVar fron outside after invoking secondFunction",numVar);
	console.log("NUM_CONST from outside after invoking secondFunction",NUM_CONST);

function thirdFunction(){
	 numLet = 1000;
	 numVar = 2000;
	// NUM_CONST = 3000;
	console.log("Redeclared numLet from inside thirdFunction",numLet);
	console.log("Redeclared numVar fron inside thirdFunction",numVar);
}	

thirdFunction();

 	console.log("numLet from outside after invoking thirdFunction",numLet);
	console.log("numVar fron outside after invoking thirdFunction",numVar);

function fourthFunction(){
	console.log("starting first for loop...");
	for(let i = 0; i < 10; i++)
	{
		console.log(i);
	}
	//console.log ("value of i from fourthFunction:",i);
	console.log("starting second for loop...");
	for(var j = 10; j < 20; j++)
	{
		console.log(j);
	}
	console.log ("value of j from fourthFunction:",j);

}	

fourthFunction();

//console.log ("value of j from fourthFunction:",j);
