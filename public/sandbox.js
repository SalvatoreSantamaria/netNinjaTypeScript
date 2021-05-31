"use strict";
// Note: Takes no arguments, and returns void
var someFunction;
(function () { return void 
//example 1 -----------------------------------------------------
let; });
greet: (function (a, b) { return void 
// this follows the signature above: 2 params that are strings, and it doesn't return anything
greet; });
(function (name, greeting) {
    console.log(name + " says " + greeting);
});
//example 2 -----------------------------------------------------
var calc;
// this follows the signature above: 2 number params, 1 string param, return a number
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
//example 3 -----------------------------------------------------
var logDetails;
logDetails = function (ninja) {
    console.log(ninja);
};
// furthering example 3
var logDetails2;
logDetails = function (ninja) {
    console.log(ninja);
};
