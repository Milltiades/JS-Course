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

// function foo(par1, ...otherPars) {
//   return otherPars.map((e) => par1 + e);
// }

// const arr = foo(1, 2, 3, 4, 5);
// console.log(arr);

// An arrow function expression (also called a fat arrow to distinguish from a hypothetical -> syntax in future JavaScript) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.

// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(function (s) {
//   return s.length;
// });

// console.log(a2); // [8, 6, 7, 9]
// const a3 = a.map((x) => x.length);
// console.log(a3); //[8, 6, 7, 9]

// function createPerson(name) {
//   return {
//     talk: () => `I am ${name}`,
//   };
// }
// const me = createPerson("Giga");
// const you = createPerson("Lasha");

// function Person(name) {
//   this.name = name;
//   this.talk = () => {
//     return `Hello I am ${this.name}`;
//   };
// }

// const sina = new Person("Sina");
// const ben = new console.log("Ben");
// const sam = new console.log("Sam");

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// const h1 = new SuperElement("h1", "Helloooo!");

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// const array = ["a", "b", "c"];
// const myElements = array.map((item) => {
//   return new SuperElement("p", item);
// });

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// const array = [
//   {
//     type: "h1",
//     content: "Hello this is title",
//   },
//   {
//     type: "p",
//     content: "Hello this is Content",
//   },
//   {
//     type: "button",
//     content: "Button",
//   },
// ];

// const myPage = array.map((item) => {
//   return new SuperElement(item.type, item.content);
// });

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     alert(this.el.innerText);
//   });
// }

// const el = new SuperElement("h2", "Hello World!");

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     alert(this.el.innerText);
//   });
// }

// const array = [
//   {
//     type: "h1",
//     content: "My Title",
//   },

//   {
//     type: "p",
//     content: "My Content",
//   },
//   {
//     type: "h3",
//     content: "My Subtitle",
//   },
//   {
//     type: "p",
//     content: "My Content 2",
//   },
//   {
//     type: "button",
//     content: "My Button",
//   },
// ];

// const myElements = array.map((item) => {
//   return new SuperElement(item.type, item.content);
// });

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }

// class is a function
// alert(typeof User); // function

// ...or, more precisely, the constructor method
// alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
// alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
// alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// rewriting class User in pure functions

// 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
// User.prototype.sayHi = function () {
//   alert(this.name);
// };
// User.prototype.sayNo = function () {
//   alert(`No ${this.name}`);
// };

// // Usage:
// let user = new User("John");
// let user1 = new User("John1");

// user.sayHi();
// user1.sayNo();

// class User {
//   constructor() {}
// }

// alert(typeof User); // function
// const myUser = new User();
// console.log(myUser);
// class User {
//   constructor() {}
// }

// alert(User); // class User { ... }

// let User = class {
//   sayHi() {
//     alert("Hello");
//   }
// };

// // "Named Class Expression"
// // (no such term in the spec, but that's similar to Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     alert(MyClass); // MyClass name is visible only inside the class
//   }
// };

// new User().sayHi(); // works, shows MyClass definition

// alert(MyClass); // error, MyClass name isn't visible outside of the class

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }

// let User = makeClass("Hello");
// new User().sayHi(); // Hello

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }

// let User = makeClass("Hello 2");
// new User().sayHi(); // Hello 2

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("Giga");
// console.log(user.name);

// user = new User("sds");

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get nameFoo() {
//     return this.name;
//   }
//   set nameFoo(value) {
//     this.name = value;
//   }
// }

// let giga = new User("giga");

// console.log(giga.nameFoo);
// giga.nameFoo = "Lasha";
// console.log(giga.nameFoo);
