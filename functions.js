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

// function square(number) {
//   return number * number;
// }

// function myFunc(theObject) {
//   theObject.make = "toyta";
// }

// const myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: "1998",
// };

// console.log(myCar.make); // Honda

// myFunc(myCar);
// console.log(myCar.make); // Toyto

// function myFunc(theArr) {
//   theArr[0] = 30;
// }

// const arr = [45];

// console.log(arr[0]);

// myFunc(arr);
// console.log(arr[0]); // 30

// const square = function (number) {
//   return number * number;
// };

// console.log(square(4)); // 16

// const factorial = function fac(n) {
//   return n < 2 ? 1 : n * fac(n - 1);
// };
// console.log(factorial(5)); // 120
// console.log(factorial(4)); // 24
// console.log(factorial(3)); // 6

// function map(f, a) {
//   const result = new Array(a.length);
//   for (let i = 0; i < a.length; i++) {
//     result[i] = f(a[i]);
//   }
//   return result;
// }
// const cube = function (x) {
//   return x * x * x;
// };
// const numbers = [0, 1, 2, 5, 10];
// console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

// let myFunc;
// let num = 0;
// if (num === 0) {
//   myFunc = function (theObject) {
//     theObject.make = "Toyota";
//   };
// }

// console.log(myFunc());

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5)); // 120
// console.log(factorial(7)); // 5040
// console.log(factorial(3)); // 6
// console.log(factorial(1)); // 1
// console.log(factorial(0)); // 1

// console.log(foo(5)); //25

// function foo(n) {
//   return n * n;
// }
// function square(n) {
//   return n * n;
// }

// console.log(square(5)); // 25
// Function hoisting only works with function declarations — not with function expressions. The following code will not work:

// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// }; // SyntaxError

// const num1 = 20;
// const num2 = 3;
// const name = "Giga";

// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scorder ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // Giga scored 5

// const foo = function bar() {};

// let x = 0;

// while (x < 10) {
//   x++;
// }

// function loop(x) {
//   if (x >= 10) {
//     return;
//   }
//   loop(x + 1);
// }

// loop(0);

// function walkTree(node) {
//   if (node === null) {
//     return;
//   }

//   for (let i = 0; i < node.childNodes.length; i++) {
//     walkTree(node.childNodes[i]);
//   }
// }
// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(`end: ${i}`);
// }
// foo(3);

// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// console.log(addSquares(2, 3)); //13
// console.log(addSquares(3, 4)); //25
// console.log(addSquares(4, 5)); // 41

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }

// const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
// console.log(fnInside(5)); // 8
// console.log(outside(3)(5)); // 8

// function A(x) {
//   function B(y) {
//     function C(z) {
//       console.log(x + y + z);
//     }
//     C(3);
//   }
//   B(2);
// }
// A(1); // Logs 6 (which is 1 + 2 + 3)

// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(10));
// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// console.log(outside()(6));

// The outer function defines a variable called "name"
// const pet = function (name) {
//   const getName = function () {
//     // The inner function has access to the "name" variable of the outer function
//     return name;
//   };
//   return getName; // Return the inner function, thereby exposing it to outer scopes
// };
// const myPet = pet("Vivie");

// console.log(myPet()); // "Vivie"

// const createPet = function (name) {
//   let sex;
//   const pet = {
//     setName(newName) {
//       name = newName;
//     },
//     getName() {
//       return name;
//     },
//     getSex() {
//       return sex;
//     },
//     setSex(newSex) {
//       if (
//         typeof newSex === "string" &&
//         (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
//       ) {
//         sex = newSex;
//       }
//     },
//   };

//   return pet;
// };

// const pet = createPet("Vivie");
// console.log(pet.getName()); // Vivie

// pet.setName("Roxy");
// pet.setSex("female");
// console.log(pet.getSex()); // female
// console.log(pet.getName()); // Roxy

// const getCode = (function () {
//   const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

//   return function () {
//     return apiCode;
//   };
// })();

// console.log(getCode()); // "0]Eal(eh&2"
// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }

// console.log(myConcat(", ", "red", "orange", "blue"));
// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

// Note: The arguments variable is "array-like", but not an array. It is array-like in that it has a numbered index and a length property. However, it does not possess all of the array-manipulation methods.

// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   console.log(typeof b);
//   return a * b;
// }

// console.log(multiply(5)); // 5

// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(10, 1, 2, 3);
// console.log(arr); // [2, 4, 6]

function foo(par1, ...otherPars) {
  return otherPars.map((e) => par1 + e);
}

const arr = foo(1, 2, 3, 4, 5);
console.log(arr);
