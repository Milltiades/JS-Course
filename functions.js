// a();
// b();

// Function Statement aka Function Declaration

// function a() {
//   console.log("a called");
// }

// // Function Expression
// var b = function () {
//   console.log("b called");
// };

// Anonymous Function
// function () {

// }

// Named Function Expression
// var bb = function xyz() {
//   console.log("bb called");
// };

// a();
// b();
// bb(); //bb called
// xyz(); //reference error

//Difference between Parameters and Arguments ?

// var p = function (param1, param2) {
//   //these are parametres
//   console.log(`p called with ${param1} and ${param2}`);
// };

// p(1, 2); // these are arguments

// first Class Functions

// var foo = function (param) {
//   console.log(`foo is called and parameter is: ${param}`);
//   return function foo1() {};
// };

// console.log(foo());

//the ability of functions  use functions as values is known as a first class functions
//First Class Citizens

//Arrow functions

//What is a callback function in js

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log(`Button Clicked`, ++count);
//   });
// }
// attachEventListeners();

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }
