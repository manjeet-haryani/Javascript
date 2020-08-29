"use strict";

console.log("IS this === window?", this === window);

console.log ("What is this?", this);

var age = 35;
console.log("window.age", window.age);
console.log("age", this.age);

this.age = 55;
console.log("window.age", window.age);
console.log("age", age);

let someFunction = () => this;

console.log("this returned from function",someFunction());

let myCar = {

	make : "Volvo",
	model:"s60",
	price : 420000,
	printDetails()
	{
		console.log(`
			Make :${this.make}
			Model :${this.model}
			Price :${this.price}`)
	},
	engine :{
		cylinders: 4,
		displacement: 2000,
		horsepower:250,
		printDetails(){
			console.log(`
				Displacement : ${this.displacement}cc
				Horsepower:${this.horsepower}bhp`)
		}
	}
};

console.log(" The fields of myCar :");
myCar.printDetails();

console.log("Engine Details :\n");
myCar.engine.printDetails();

let myCar1 = {

	make : "Volvo",
	model:"s60",
	price : 420000,
	
	engine :{
		cylinders: 4,
		displacement: 2000,
		horsepower:250,
	}
};

function printCarDetails(){
	console.log(`		Make:${this.make}
		Model:${this.model}
		Price: $${this.price}`);
}

function printEngineDetails(){

	console.log(`		Displacement : ${this.displacement}cc
				Horsepower:${this.horsepower}bhp`)
		}

console.log("Car details:\n");
printCarDetails.call(myCar1);

console.log("Engine details:\n");
printEngineDetails.call(myCar1.engine);

let yourCar = {

	make : "Porsche",
	model:"718 cayman",
	price : 410000,
	
	engine :{
		cylinders: 4,
		displacement: 2500,
		horsepower:450,
	}
};
console.log("your Car details:\n");
printCarDetails.call(yourCar);

console.log("Engine details:\n");
printEngineDetails.call(yourCar.engine);