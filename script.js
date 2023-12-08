// let num = 3;
// let newNum = 3.16;

// console.log(typeof num);
// console.log(typeof newNum);

// let mill = 1e6;
// 1 * (10**6) = 1000000
// console.log(mill);

// let smallNum = 1e-2;

// console.log(smallNum);

// let score = new Number(100);
// console.log(newNum.toFixed());

// let num = 1e5;
// console.log("num: ", typeof num);

// const PI = 3.141596254;

// let num = PI.toFixed(3); // დაამრგვალო სიზუსტით
// num = PI.toPrecision(5); // ზუსტად გამოაჩინო

// let mill = 1000000;
// num = mill.toExponential(); // შეკვეცილათ აჩვენო

// let num2 = PI.toPrecision(3);
// console.log(num2);
// let lightSpeed = 186000;

// console.log(lightSpeed.toExponential());

// String primitive
// const message = "This is my first message";
// const message2 = " This is my first message ";
// console.log(message.includes("my"));
// console.log(message.includes("not"));
// console.log(message.startsWith("This"));
// console.log(message.startsWith("this"));
// console.log(message.endsWith("message"));
// console.log(message.endsWith("e"));
// console.log(message.indexOf("message"));
// console.log(message.replace("first", "second"));
// console.log(message);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message2.trim());
// console.log(message2.trimLeft());
// console.log(message2.trimRight());

// const message = "This is my\n first message";
// console.log(message);
// console.log(message.split(" "));

// String object
// const another = new String("hi");
//

// const myVariable = "Mathematics";

// console.log(myVariable.length);
// console.log("Every good boy does fine".length);
// console.log(myVariable.charAt(6)); //მეექვსე ციფრი სტრინგში
// console.log(myVariable.indexOf("ati"));
// console.log(myVariable.lastIndexOf("ath"));
// console.log(myVariable.slice(5)); //იწყება 5 ინდექსით და გამოაქვს ბოლომდე
// console.log(myVariable.slice(5, 8)); //იწყება 5 ინდექსით და 8-მდე
// console.log(myVariable.slice(5, 6)); //არაფერს არ გამოიტანს თუ ნაკლებია ან იგივე
// console.log(myVariable.split("a"));
// const num = myVariable.split("");
// console.log(num);

// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       let color = "red";
//     }
//   }

//   console.log(color);
// }
// start();

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

// var color = "red"; // var is attached to window object
// let age = 30;

// this function is attached to window object
// function saiHi() {
//   console.log("hi");
// }

// if (true) {
//   var varVariable = "this is true - var"; // function scoped
// }

// var varVariable = "this is false"; // var can be re-declared
// console.log(varVariable);

// let letVariable = "true"; // let can not be re-declared
// let letVariable = "false";

// console.log(letVariable);

// if (true) {
//   let letVariable = "this is true - let"; // block scoped
//   const constVariable = "this is true - const"; // block scoped
//   console.log(letVariable);
//   console.log(constVariable);
// }
// console.log(letVariable);

// console.log(varVariable);

// const constVar = { name: "Bob", age: 21 };
// let letVar = 2;

// constVar.name = "sally";
// constVar.name = "sally 2";
// constVar.age = 2;

// console.log(constVar);

// var, let, and const

//both var and let are re-assignable

// const x = 1;
// x = 2;

// console.log(x);

// global scope
// var x = 1;
// let y = 2;
// const z = 3;

// local scope

// local scope
// function myFunc() {
//   const z = 5;
//   console.log(y);
//   // local scope
//   {
//     const y = 4;
//     console.log(y);
//   }
// }

// myFunc();

//global scope
// var x = 1; // function scope
// let y = 2; // block scope
// const z = 3;

// console.log(`global: ${x}`);
// console.log(`global: ${y}`);
// console.log(`global: ${z}`);

// function myFunc() {
//   var x = 10;
//   const z = 5;
//   {
//     var x = 11; // function scoped
//     const z = 6; // block scoped
//     console.log(`block: ${x}`);
//     console.log(`block: ${y}`);
//     console.log(`block: ${z}`);
//   }
//   console.log(`function: ${x}`);
//   console.log(`function: ${y}`);
//   console.log(`function: ${z}`);
// }

// myFunc();

// Global = Not in a function or block. Not desirable.
// Local = in a function or block. Nor global.
// var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

// console.log(globalVar);
// import { exportedVar } from "./moduleScript.js";

// console.log(exportedVar);

// function test() {
//   const b = 2;

//   if (true) {
//     const c = 3;
//     console.log(b, c);
//   }
//   // console.log(c);
// }

// test();

// var variables ar function scoped
// let, and const are block scoped

// const color = "red";

// function start() {
//   const message = "hi";
//   const color = "blue";
//   console.log(color);
// }
// function stop() {
//   const message = "bye";
//   // console.log(message);
// }
// start();
// stop();

// console.log(`sumFunc(1, 2 => ${sumFunc(1, 2)}`);
// console.log(`sumConst(3, 4 => ${sumConst(3, 4)}`);

// function sumFunc(a, b) {
//   return a + b;
// }

// var sumConst = (a, b) => a + b;

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("Namaste Javascript");
// }

// getName();
// console.log(x);
// console.log(getName);

// function outer(a, b) {
//   let state = "rabbit";
//   function inner() {
//     return `Hello ${state}`;
//   }
//   return inner;
// }

// function alertFun(message) {
//   return () => {
//     alert(`${message}`);
//   };
// }

// const alertMom = alertFun("hi mom");

// outer();

// for (var i = 0; i < 100; i++) {
//   const log = () => {
//     console.log(i);
//   };
//   setTimeout(log, 100);
// }

// let myName = "Kyle";

// function printName() {
//   console.log(myName);
// }

// myName = "Giga";

// printName();

// myName = "lasha";

// printName();

// function outerFunction(url) {
//   fetch(url).then(() => {
//     console.log(url);
//   });
//   // const outer2 = "Hi";
//   // return function innerFunction(innerVariable) {
//   //   console.log("Outer Variable: " + outerVariable);
//   //   console.log("Inner Variable: " + innerVariable);
//   //   console.log(outer2);
//   // };
// }

// const newFunction = outerFunction("outside");
// newFunction("inner");

// const arr = ["badger", "beaver", "baboon"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const e of arr) {
//   console.log(e);
// }

// arr[Symbol.iterator] = function () {
//   let i = 0;
//   let arr = this;
//   return {
//     next: function () {
//       if (i >= arr.length) {
//         return { done: true };
//       } else {
//         const value = arr[i] + "🐒";
//         i++;
//         return { value, done: false };
//       }
//     },
//   };
// };

// for (const e of arr) {
//   console.log(e);
// }

// arr.forEach(console.log);

// const mil = 1000000;
// const arr = Array(mil);

// console.time("⏲");

// for (let i = 0; i < mil; i++) {}
// for (const v of arr) {}
// arr.forEach((v) => null);
// arr
//   .map((v) => v)
//   .map((v) => v)
//   .forEach((v) => v);
// console.timeEnd("⏲");

// const equine = { horse: "🐴", zebra: "🦓", unicorn: "🦄" };

// for (const key in equine) {
//   console.log(equine[key]);
// }

// for (const v of Object.values(equine)) {
//   console.log(v);
// }

// const equine = new Map(
//   Object.entries({ horse: "🐴", zebra: "🦓", unicorn: "🦄" })
// );

// for (const v of equine.values()) {
//   console.log(v);
// }

// const faces = ["😇", "😍", "😢", "🤠", "🍿", "🚗", "😢", "🤠", "🍿"];

// const feces = faces.filter((v) => v === "🍿");
// const cleaned = feces.map((v) => "🧭");

// console.log(cleaned);

// const isCar = faces.some((v) => v === "🚗");
// console.log(isCar);
// const isEmoji = faces.every((v) => v > "s");
// console.log(isEmoji);

// const pooCount = faces.reduce((acc, cur) => {
//   return acc + (cur === "🤠" ? 1 : 0);
// }, 0);
// console.log(pooCount);

// const sorted = faces.sort((a, b) => a < b);
// console.log(sorted);

// sorted.splice(6);
// console.log(sorted);

// for (initialExpression; condition; incrementExpression){
//   statement
// }

// Javascript Number Methods

//toString() returns a string, with a number rounded and written using exponential notation.
// let x = 123;
// console.log(x);
// console.log(x.toString());
//returns 123

//toFixed() returns a string, with the number written with a specified number of decimals:
// let y = 9.565;
// let t = 9.5455;
// console.log(y);
// console.log(y.toFixed(2)); //returns 9.56
// console.log(y.toFixed(1)); //returns 9.6
// console.log("test:", t.toFixed(2)); //returns 9.55
// console.log(y.toFixed(0)); //returns 10

//toPrecision() returns a string, with a number written with a specified length:

// let z = 2.565;
// console.log(z);
// console.log(z.toPrecision(1)); //returns 3

//toExponential() returns a string, with a number rounded and written using exponential notation.

// let b = 70000000;
// console.log(b);
// console.log(b.toExponential()); //returns 7e+7

//valueOf() returns a number as a number.
// let r = 123;
// console.log(r);
// console.log(r.valueOf());

// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code.

// All JavaScript data types have a valueOf() and a toString() method.

// Number() 	Returns a number converted from its argument.
// parseFloat() 	Parses its argument and returns a floating point number
// parseInt() 	Parses its argument and returns a whole number

// console.log(Number(true)); //output 1
// console.log(Number(false)); //output  0
// console.log(Number("10")); //output 10
// console.log(Number("  10")); //output 10
// console.log(Number("10  ")); //output 10
// console.log(Number(" 10  ")); //output 10
// console.log(Number("10.33")); //output 10.33
// console.log(Number("10,33")); //output NaN
// console.log(Number("10 33")); //output NaN
// console.log(Number("John")); //output NaN

// console.log(new Date("2023-04-16")); //output Date Sun Apr 16 2023 04:00:00 GMT+0400 (Georgia Standard Time)

// let x = new Date("2023-01-02");
// console.log(Number(x)); // Output will be the number of milliseconds since the Unix Epoch for "2023-01-02 :   1672617600000"

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

// console.log(parseInt("-10")); //output -10
// console.log(parseInt(" -10")); //output -10
// console.log(parseInt(" -10 ")); //output -10
// console.log(parseInt("-10.33")); //output -10
// console.log(parseInt("10 33")); //output 10
// console.log(parseInt("10 years")); //output 10
// console.log(parseInt("years 10")); //output NaN

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

// console.log(parseFloat("-10")); //output -10
// console.log(parseFloat(" -10")); //output -10
// console.log(parseFloat(" -10 ")); //output -10
// console.log(parseFloat("-10.33")); //output -10
// console.log(parseFloat("10 33")); //output 10
// console.log(parseFloat("10 years")); //output 10
// console.log(parseFloat("years 10")); //output NaN

// console.log(Number.isInteger(3)); //output  true
// console.log(Number.isInteger(3.3)); //output  false

// console.log(Number.isSafeInteger(10)); //output  true
// console.log(Number.isSafeInteger(3032343434412222030)); //output  false

// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

// The Number methods Number.parseInt() and Number.parseFloat()

// are the same as the

// Global methods parseInt() and parseFloat().

// The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).

// String

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

// "cat".charAt(1);

// console.log("cat".charAt(1));
// console.log("cat"[1]);

// const a = "a";
// const b = "b";

// if (a < b) {
//   console.log(`${a} is less then ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// function areEqualCaseInsensitive(str1, str2) {
//   return str1.toUpperCase() === str2.toUpperCase();
// }

// const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss");
// areEqualInLowerCase("ı", "I");

// const areEqual = (str1, str2, locale = "en-US") =>
//   str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

// areEqual("ß", "ss", "de"); // false
// areEqual("ı", "I", "tr"); // true

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"

// // For these reasons, the code may break when it encounters String objects when it expects a primitive string instead, although generally, authors need not worry about the distinction.

// // A String object can always be converted to its primitive counterpart with the valueOf() method.
// console.log(eval(s2.valueOf())); // returns the number 4

// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"

// console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // Output: "Hello"

// const path = String.raw`C:\Users\nodejs`;
// console.log(path); // Output: "C:\Users\nodejs"

// let text = "Hello, my email is user@example.com";
// let emailPattern = /\S+@\S+\.\S+/;
// let result = text.match(emailPattern);

// console.log(result);
// // Output: ["user@example.com"]

// let str = "Hello";
// let str2 = "World";
// let str3 = "Hello World";
// let str4 = " Hello ";
// let str5 = "Apple,Orange,Banana";
// let num = "3";
// console.log(str.charAt(1)); //  e
// console.log(str.charCodeAt(2)); //  108
// console.log(str.concat(" ", str2)); // Hello World
// console.log(str.indexOf("H")); // 0
// console.log(str.indexOf("l")); // 2
// console.log(str.lastIndexOf("l")); // 3
// console.log(str.slice(1, 3)); // el
// console.log(str3.substring(0, 5)); // Hello
// console.log(str3.substr(6, 5)); // World
// console.log(str3.toLowerCase()); // hello world
// console.log(str3.toUpperCase()); // HELLO WORLD
// console.log(str4.trim()); // Hello
// console.log(str3.replace("World", "Universe")); // Hello Universe
// console.log(str5.split(",")); // [ "Apple", "Orange", "Banana" ]
// console.log(str5.length); // 19
// console.log(str5.startsWith("Hello")); // false
// console.log(str3.startsWith("Hello")); // true
// console.log(str3.endsWith("World")); // true
// console.log(str3.includes("e")); //true
// console.log(str3.includes("z")); //false
// console.log(str3.includes("world")); //false
// console.log(str3.includes("World")); //true
// console.log(str.repeat(3)); //HelloHelloHello
// console.log(num.padStart(3, "0")); // 003

// var greeter = "hey hi"; //global scope
// var greeter = "say Hello instead"; //global scope

// function myFunction() {
//   var hello = "hello"; // function scope
// }

// console.log(greeter); // hey hi
// console.log(greeter); // say Hello instead
// console.log(hello); // error: ReferenceError : hello is not defined

// var greater;
// console.log(greeter);
// var greeter = "hey hi"; //undefined

// var greeter = "hey hi";

// if (true) {
//   var greeter = "say Hello instead";
// }

// console.log(greeter); // say Hello instead

// let greeter = "hey hi";

// if (true) {
//   let greeter = "say Hello instead";
// }

// console.log(greeter); // hey hi

// let greeter = "hey hi";

// if (true) {
//   let greeter = "say Hello instead";
//   console.log(greeter); // say Hello instead
// }

// console.log(greeter); // hey hi

// let greeter = "hey hi";

// if (true) {
//   let hello = "say Hello instead";
//   console.log(hello); // say Hello instead
// }

// console.log(hello); // ReferenceError: hello is not defined

// let greeter = "hey hi";
// greeter = "say Hello instead";
// console.log(greeter);

// console.log(greeter);
// let greeter = "hey hi"; // Uncaught ReferenceError: can't access lexical declaration 'greeter' before initialization

// console.log(greeter);

// const greeter = "hey hi"; //Uncaught ReferenceError: can't access lexical declaration 'greeter' before initialization

// const greeter = {
//   message: "say hi",
//   times: 4,
// };
// greeter.message = "say Hello instead";
// console.log(greeter); //Object { message: "say Hello instead", times: 4 }

// Scope of var

// Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

// var tester = "hi";
// function foo() {
//   var hello = "hello";
// }
// console.log(hello);

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//   var greeter = "say Hello instead";
// }

// console.log(greeter); // "say Hello instead"

// let greeter = "hey hi";
// let times = 4;

// if (times > 3) {
//   let greeter = "say Hello instead";
// }

// console.log(greeter); // Uncaught SyntaxError: redeclaration of var greeter
// let greeting = "say Hi";
//     if (true) {
//         let greeting = "say Hello instead";
//         console.log(greeting); // "say Hello instead"
//     }
//     console.log(greeting); // "say Hi"

// console.log(name);

// let name = "giga"; //Uncaught ReferenceError: can't access lexical declaration 'name' before initialization

// console.log(surname);

// var surname = "kakulia";  // undefined

// const greeting = "say Hi";
// greeting = "say Hello instead"; // error: Assignment to constant variable.

// Javascript Scope

// JavaScript has 3 types of scope:

//     Block scope
//     Function scope
//     Global scope

//block scope

// {
//   let x = 2;
// }
// // x can NOT be used here
// console.log(x); // Uncaught ReferenceError: x is not defined

// {
//   var x = 2;
// }
// // x CAN be used here
// console.log(x); // 2

//local scope
//Variables declared within a JavaScript function, become LOCAL to the function.

// code here can NOT use carName

// function myFunction() {
//   let carName = "Volvo";
//   // code here CAN use carName
// }

// code here can NOT use carName

// Local variables have Function Scope:

// They can only be accessed from within the function.

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

// Local variables are created when a function starts, and deleted when the function is completed.

// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// function myFunction() {
//   var carName = "Volvo"; // Function Scope
// }
// function myFunction() {
//   let carName = "Volvo"; // Function Scope
// }
// function myFunction() {
//   const carName = "Volvo"; // Function Scope
// }

//A variable declared outside a function, becomes GLOBAL.

// let carName = "Volvo";
// // code here can use carName

// function myFunction() {
//   // code here can also use carName
//   console.log(carName);
// }

// myFunction();

// A global variable has Global Scope:

// All scripts and functions on a web page can access it.

// Global Scope

// Variables declared Globally (outside any function) have Global Scope.

// Global variables can be accessed from anywhere in a JavaScript program.

// Variables declared with var, let and const are quite similar when declared outside a block.

// They all have Global Scope:
// var x = 2; // Global scope
// let x = 2; // Global scope
// const x = 2; // Global scope

// console.log(x);

// In JavaScript, objects and functions are also variables.

// Scope determines the accessibility of variables, objects, and functions from different parts of the code.

// myFunction();

// // code here can use carName

// function myFunction() {
//   carName = "Volvo";
// }

// Global Variables in HTML

// With JavaScript, the global scope is the JavaScript environment.

// In HTML, the global scope is the window object.

// Global variables defined with the var keyword belong to the window object:
// Global variables defined with the let keyword do not belong to the window object:

// Do NOT create global variables unless you intend to.

// Your global variables (or functions) can overwrite window variables (or functions).
// Any function, including the window object, can overwrite your global variables and functions.

// The Lifetime of JavaScript Variables

// The lifetime of a JavaScript variable starts when it is declared.

// Function (local) variables are deleted when the function is completed.

// In a web browser, global variables are deleted when you close the browser window (or tab).

// Hoisting
// x = 5;
// console.log(x);

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// carName = "volvo";
// let carName; // ReferenceError

// carName = "volvo";
// const carName;  // Using a const variable before it is declared, is a syntax error, so the code will simply not run.
// carName = "volvo";
// var carName;
// console.log(carName);
// var x = 5;
// var y = 7;
// console.log(x + y);
// var x = 5;
// console.log(x + y);
// var y = 7;  //5 + undefinded

// Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.

// Declare Your Variables At the Top !

// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).

// To avoid bugs, always declare all variables at the beginning of every scope.

// Since this is how JavaScript interprets the code, it is always a good rule.

// JavaScript in strict mode does not allow variables to be used if they are not declared.
// Study "use strict" in the next chapter.

// console.log(x);

// let x = 2; //ReferenceError

// console.log(x);

// const x = 2; //ReferenceError

// console.log(x);

// var x = 2; //undefined

// getName();
// console.log(x);

// var x = 7;
// function getName() {
//   console.log("Namaste Javascript");
// }

// var x = 7;
// function getName() {
//   console.log("namaste");
// }
// getName();
// console.log(x);
// console.log(getName);

// function init() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();

// function varTest() {
//   var x = 1;
//   {
//     var x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }

// varTest();

// function letTest() {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log(x); // 2
//   }
//   console.log(x); // 1
// }

// letTest();

// var x = "global";
// let y = "global";
// console.log(this.x);
// console.log(this.y);

// function test() {
//   var foo = 33;
//   if (foo) {
//     let foo = foo + 55; // ReferenceError
//   }
// }
// test();

// function go(n) {
//     // n here is defined!
//     console.log(n); // { a: [1, 2, 3] }

//     for (let n of n.a) {
//       //          ^ ReferenceError
//       console.log(n);
//     }
//   }

//   go({ a: [1, 2, 3] });

// var a = 1;
// var b = 2;
// {
//   var a = 11;
//   let b = 22;
//   console.log(a); // 11
//   console.log(b); // 22
// }

// console.log(a); // 11
// console.log(b); // 2

// const result = /(a+)(b+)(c+)/.exec("aaabcc");
// let [, a, b, c] = result;
// console.log(a, b, c);

// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(10)); // 12

// function something(x) {
//   return function foo(y) {
//     return x + y;
//   };
// }

// const add4 = something(4);
// const add5 = something(5);

// console.log(add4(4));
// console.log(add5(5));

// function outerFunction(x) {
//   return function innerFunction(y) {
//     return x * y;
//   };
// }
// const variableX = outerFunction(10);
// const variableY = outerFunction(20);

// console.log(variableX(30));
// console.log(variableY(30));

// const counter = (function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment() {
//       changeBy(1);
//     },
//     decrement() {
//       changeBy(-1);
//     },
//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value()); //0

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value()); //3
// counter.decrement();
// console.log(counter.value()); //2
// counter.decrement();
// console.log(counter.value()); //1

// const makeCounter = function () {
//   let privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment() {
//       changeBy(1);
//     },
//     decrement() {
//       changeBy(-1);
//     },
//     value() {
//       return privateCounter;
//     },
//   };
// };

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.value()); // 0

// counter1.increment();
// counter1.increment();
// console.log(counter1.value()); // 2

// counter1.decrement();
// console.log(counter1.value()); // 1
// console.log(counter2.value()); // 0

// const mainFoo = function () {
//   let initialValue = 1;
//   function changeBy(value) {
//     initialValue *= value;
//   }
//   return {
//     multipleBy2() {
//       changeBy(2);
//     },
//     // divideBy3() {
//     //     changeBy(0.3)
//     // },
//     changedValue() {
//       return initialValue;
//     },
//   };
// };

// const foo = mainFoo();

// console.log(foo.changedValue());
// foo.multipleBy2();
// foo.multipleBy2();
// foo.multipleBy2();

// console.log(foo.changedValue());

//Every closure has three scopes:

// Local scope (Own scope)
// Enclosing scope (can be block, function, or module scope)
// Global scope

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// const a = "red";

// function colorFun(b) {
//   return function (c) {
//     return function (d) {
//       return function (e) {
//         return b + c + d + e + a;
//       };
//     };
//   };
// }

// console.log(colorFun("my")(" favorite")(" color")(" is "));

//global scope
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       //outer function
//       return function sum4(d) {
//         //local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }
// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);

// console.log(result);

// console.log(sum(1)(2)(3)(4));

// In the example above, there's a series of nested functions, all of which have access to the outer functions' scope. In this context, we can say that closures have access to all outer function scopes.

// function outer() {
//   let getY;
//   {
//     const y = 6;
//     getY = () => y;
//   }
//   console.log(typeof y);
//   console.log(getY());
// }
// outer();

// const counter = function () {
//   let initialNum = 0;
//   function changedBy(value) {
//     initialNum += value;
//   }
//   return {
//     increment() {
//       changedBy(1);
//     },
//     decrement() {
//       changedBy(-1);
//     },
//     value() {
//       return initialNum;
//     },
//   };
// };
// const counterFunction = counter();
// counterFunction.increment();
// counterFunction.increment();
// console.log(counterFunction.value());

// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4));

// global scope
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // outer functions scope
//       return function sum4(d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); // 20

// myModule.js
// let x = 5;
// export const getX = () => x;
// export const setX = (val) => {
//   x = val;
// };

///

// foo();
// function foo() {
//   console.log("hi");
// }

// foo1();

// const foo1 = () => {
//   console.log("ho again!");
// };

// foo2();

// var foo2 = () => {
//   console.log("hi again bro!");
// };

// let b = 3; // heap memory
// function impureFun(a) {
//   return a + b;
// }

// function outer() {
//   let state = "rabbit";
//   function inner() {
//     return `Hello ${state}`;
//   }
//   return inner;
// }

// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i); // 3 3 3
//   };

//   setTimeout(log, 100);
// }
// for (let i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i); // 1 2 3
//   };

//   setTimeout(log, 100);
// }

// let myName = "Kyle";

// function printName() {
//   console.log(myName);
// }
// myName = "Joey";

// printName();

// myName = "Kate";

// printName();

// function outerFunction(outerVariable) {
//   const outer2 = "Hi";
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//     console.log(outer2);
//   };
// }

// const newFunction = outerFunction("outside");
// newFunction("inner");

// // outerFunction("outside")("inside");

// let num = Math.random() * Math.random() * Math.random();

// if (num < 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }

// console.log(x, num);

// Loops

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// } // 1 3 5

// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// } // 5 3 1

// for (initialization; condition; finalExpression) {
//   // code
// }

// for (let i = 1; i < 10; i += 2) {
//   if (i === 7) {
//     break;
//   }
//   console.log("Total elephants: " + i);
// }

// Output:
// Total elephants: 1
// Total elephants: 3
// Total elephants: 5

// const arr = [1, 2, 3];

// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i], i);
// }

// Output:
// 1
// 2
// 3
// undefined

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i);
// }

// Output:
// 1
// 2
// 3

// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i], i);
// }

// Output:
// 1
// 2
// 3

// const capitals = {
//   a: "Athens",
//   b: "Belgrade",
//   c: "Cairo",
// };

// for (let key in capitals) {
//   console.log(key + ": " + capitals[key]);
// }

// Output:
// a: Athens
// b: Belgrade
// c: Cairo

// const names = {
//   1: "giga",
//   2: "lasha",
//   3: "dato",
// };

// for (let key in names) {
//   console.log(key + ": " + names[key]);
// }

// const array = [1, 2, 3];

// for (const i in array) {
//   console.log(i);
// }

// 0
// 1
// 2

// const array1 = [1, 2, 3];

// Array.prototype.someMethod = true;

// for (const i in array1) {
//   console.log(i);
// }

// 0
// 1
// 2
// someMethod

// Also, since the for...in is meant for objects, it's much slower with arrays than other loops.

// In short, just remember to only use for...in loops to iterate over objects, not arrays.

//for...of loop

// for (variable of object) {
//   // code
// }

// const arr = ["Fred", "Tom", "Bob"];

// for (let i of arr) {
//   console.log(i);
// }

// Output:
// Fred
// Tom
// Bob

// const m = new Map();
// m.set(1, "black");
// m.set(2, "red");

// for (let n of m) {
//   console.log(n);
// }

// Output:
// [1, black]
// [2, red]

// const s = new Set();
// s.add(1);
// s.add("red");

// for (let n of s) {
//   console.log(n);
// }

// Output:
// 1
// red

// let i = 1;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

// const myArray = [];
// let i = 10;

// do {
//   myArray.push(i);
//   i++;
// } while (i < 10);

// console.log(myArray);

// Output:
// [10]

// const arr = ["badger", "beaver", "baboon"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const e of arr) {
//   console.log(e);
// }

// arr.forEach((v) => console.log(v));

// arr.map((v) => console.log(v));

// const mil = 1000000;
// const arr = Array(mil);

// console.time("⏲");

// for (let i = 0; i < 1000000; i++) {}
// for (const v of arr) {}
// arr
//   .map((v) => v)
//   .map((v) => v)
//   .forEach((v) => null);
// console.timeEnd("⏲");

// const equine = { horse: "🐴", zebra: "🦓", unicorn: "🦄" };

// for (const key in equine) {
//   console.log(equine[key]);
// }

// for (const v of Object.values(equine)) {
//   console.log(v);
// }

// const equine = new Map(
//   Object.entries({ horse: "🐴", zebra: "🦓", unicorn: "🦄" })
// );

// for (const v of equine.values()) {
//   console.log(v);
// }
const faces = [
  "😇",
  "😍",
  "😢",
  "🤠",
  "🍿",
  "🚗",
  "😢",
  "🤠",
  "🍿",
  "😇",
  "😍",
  "😢",
];

// const feces = faces.filter((v) => v === "🚗");
// const cleaned = feces.map((v) => "🦓");

// console.log(cleaned);

// const isCar = faces.some((v) => v === "🚗");
// console.log(isCar); //true

// const isEmoji = faces.every((v) => v > "🤠");
// console.log(isEmoji); //false

// const pooCOunt = faces.reduce((acc, cur) => {
//   return acc + (cur === "🚗" ? 1 : 0);
// }, 0);
// console.log(pooCOunt);

const sorted = faces.sort((a, b) => a < b);
console.log(sorted);

sorted.splice(2);
console.log(sorted);
