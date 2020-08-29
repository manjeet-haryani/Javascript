"use strict";

let firstItem = { id:1, name: "laptop", price: 500};
let secondItem = { id:2, name: "watch", price: 100, brand :"Sony"};

console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}.`);

console.log(`secondItem has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}.`);

console.log(`the brand of firstitem is ${firstItem.brand} while that of secondItem is${secondItem.brand}`);


const USD_EUR = 0.9;

let thirdItem = {id: 3,name : "headphones", brand :"sony", price : 84, priceEUR: this.price * USD_EUR};

console.log("The price of third item in euros is ",thirdItem.price);

 thirdItem = {id: 3,name : "headphones", brand :"sony", price : 84, priceEUR: function(){ return this.price * USD_EUR}};

console.log("Price of Updated thirdItem in Euros:", thirdItem.priceEUR());

 thirdItem = {id: 3,name : "headphones", brand :"sony", price : 84, priceEUR(){ return this.price * USD_EUR}};

console.log("Price of ES6 thirdItem in Euros:", thirdItem.priceEUR());

thirdItem.mfgCountry = "canada";
console.log("third item  is:",thirdItem);

let fourthItem = new Object();

fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log ("The fourthItem is :", fourthItem);

delete fourthItem.price;

console.log("fourthItem is",fourthItem);
