"use strict";
function Car(make, model, price, engine){
	this.make = make;
	this.model = model;
	this.price= price;
	this.engine = engine;
}
let s60Engine = {
	cylinders: 4,
	displacement : 2000,
	horsepower: 250
}
let myCar = new Car("volvo", "S60", 420000, s60Engine);

console.log(`my car is a${myCar.make} ${myCar.model}`);

let caymanEngine ={
		cylinders: 4,
		displacement: 2000,
		horsepower:250,
	}

let yourCar = new Car("porsche", "718 cayman", 61000, caymanEngine);
console.log(`Your car is  a${yourCar.make} ${yourCar.model}`);

function Car (make, model, price, engine){
	this.make = make;
	this.model = model;
	this.price = price;
	this.engine = engine;
	this.details = function(){
		console.log(`		Make:${this.make}
			Model: ${this.model}
			Price: ${this.price}`);
	};
	this.engine.details = function(){
		console.log(`		Displacement:${this.displacement}cc
			Horsepower: ${this.horsepower}bhp`);
	};
};

myCar = new Car("volvo", "s60", 420000, s60Engine);

console.log("my car details:\n");
myCar.details();


console.log("my engine details:\n");
myCar.engine.details();

class Vehicle{
	constructor(make, model, price, engine){
		this.make = make;
		this.model =model;
		this.price = price;
		this.engine = engine;
	}
	details = function(){
		console.log(`		Make:${this.make}
			Model: ${this.model}
			Price: ${this.price}`);
	};
};

myCar = new Vehicle("VOlvo", "s60", 42000, s60Engine );
console.log("my Vehicle details:\n");
myCar.details();
