"use strict";

let prices = new Array(10, 20, 36, 41, 47);

let shallowCopy = prices;
console.log("Before changing shallowCopy, prices= \n",prices);

shallowCopy[0] = 70;

console.log("After changing shallowCopy, prices= \n",prices);

let deepCopy = prices.slice();
console.log("Before changing deepCopy, prices= \n",prices);

deepCopy[0] ="Eighty";
console.log("After changing deepCopy, prices= \n",prices);

console.log("The contents of deepCopy= \n",deepCopy);

prices.push(100);
console.log("contents of prices after a push:\n",prices);

prices.unshift(0);
console.log("contents of prices after an unshift:\n", prices);

prices.pop();
console.log("contents of prices after a pop:\n", prices);

prices.shift();
console.log("contents of prices after shift:\n", prices);

delete prices[2];
console.log("contents of prices after deletion:\n", prices);

let dogBreeds = ['labrador', 'Beagle', 'Golden retriever', 'Doberman', "German shepherd", 'Boxer'];
console.log("Original contents of dogbreeds:\n", dogBreeds);

dogBreeds.splice(3, 0, 'Poodle', 'Dalmatian');
console.log("dogbreeds after splice(3, 0, 'Poodle', 'Dalmatian':)\n",dogBreeds);

dogBreeds.splice(1, 2, 'Indi');
console.log("dogbreeds after splice(1, 2, 'Indi':)\n",dogBreeds);

let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3)=\n",sliceOfDogBreeds)


 sliceOfDogBreeds = dogBreeds.slice(3,5);
console.log("dogBreeds.slice(3,5)=\n",sliceOfDogBreeds)

 sliceOfDogBreeds = dogBreeds.slice(-3,-1);
console.log("dogBreeds.slice(-3,-1)=\n",sliceOfDogBreeds)

//concatination

let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let oceanOffices = ['Christchurch', 'sydney'];
let southernOffices = africaOffices.concat(oceanOffices);

console.log("southernOffices:",southernOffices);
console.log("africaOffices",africaOffices);
console.log("europeOffices:",europeOffices);

let allOffices = africaOffices.concat(oceanOffices,europeOffices);
console.log("allOffices:",allOffices);

let sortedOffices = allOffices.sort()
console.log("sortedOffices:",sortedOffices);

console.log("allOffices after sorting:\n",allOffices);
console.log("reverse sorting of allOffices:\n",allOffices.reverse());

allOffices = africaOffices.concat(oceanOffices, europeOffices);
console.log("sorted copy of allOfficesusing spread syntax:\n",[...allOffices].sort());

console.log("sorted copy of allOfficesusing spread syntax:\n",allOffices.slice().sort());
console.log("all offices original",allOffices);


let numArray =[20,50,3,10,35];
console.log('original numArray:\n', numArray);

console.log('after sorting of numArray using default sort:\n', numArray.slice().sort());

numArray.sort(function(a,b){return a-b});
console.log("sorted numArray with comapre functions:\n",numArray);


numArray.sort(function(a,b){return b-a});
console.log(" Reverse sorted numArray with comapre functions:\n",numArray);