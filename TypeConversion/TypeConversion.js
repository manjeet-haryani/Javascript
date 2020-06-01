"use strict";
let num = 26;
let str = "350";
let boolean = true ;
let date = new Date('2020-05-26');
console.log("Type of num:= ",typeof(num));
console.log("Type of str:= ",typeof(str));
console.log("Type of boolean:= ",typeof(boolean));
console.log("Type of date:= ",typeof(date));

let num_str = String(num);
console.log("Type of num cast to string:= ",typeof(num_str));
console.log("value of num cast to string:= ",num_str);

let str_num = Number(str);
console.log("Type of str cast to number:= ",typeof(str_num));
console.log("value of str cast to number:= ",str_num);

let boolean_str = String(boolean);
console.log("Type of boolean cast to string:= ",typeof(boolean_str));
console.log("value of boolean cast to string:= ",boolean_str);

let boolean_num = Number(boolean);
console.log("Type of boolean cast to Number:= ",typeof(boolean_num));
console.log("value of boolean cast to Number:= ",boolean_num);

let date_str = String(date);
console.log("Type of date cast to string:= ",typeof(date_str));
console.log("value of date cast to string:= ",date_str);

let date_num = Number(date);
console.log("Type of date cast to number:= ",typeof(date_num));
console.log("value of date cast to number:= ",date_num);

console.log("value of num cast to boolean: ",Boolean(num));
console.log("value of str cast to boolean: ",Boolean(str));
console.log("value of date cast to boolean: ",Boolean(date));
console.log("Boolean value of  Zero: ",Boolean(0));
console.log("Boolean value of  a blank string: ",Boolean(""));

console.log("value of null cast to String : ",String(null));
console.log("value of null cast to Number : ",Number(null));
console.log("value of null cast to boolean: ",Boolean(null));