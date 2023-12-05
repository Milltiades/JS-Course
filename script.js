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

const faces = ["😇", "😍", "😢", "🤠", "🍿", "🚗", "😢", "🤠", "🍿"];

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

let str = "Hello";
let str2 = "World";
let str3 = "Hello World";
let str4 = " Hello ";
let str5 = "Apple,Orange,Banana";
let num = "3";
console.log(str.charAt(1)); //  e
console.log(str.charCodeAt(2)); //  108
console.log(str.concat(" ", str2)); // Hello World
console.log(str.indexOf("H")); // 0
console.log(str.indexOf("l")); // 2
console.log(str.lastIndexOf("l")); // 3
console.log(str.slice(1, 3)); // el
console.log(str3.substring(0, 5)); // Hello
console.log(str3.substr(6, 5)); // World
console.log(str3.toLowerCase()); // hello world
console.log(str3.toUpperCase()); // HELLO WORLD
console.log(str4.trim()); // Hello
console.log(str3.replace("World", "Universe")); // Hello Universe
console.log(str5.split(",")); // [ "Apple", "Orange", "Banana" ]
console.log(str5.length); // 19
console.log(str5.startsWith("Hello")); // false
console.log(str3.startsWith("Hello")); // true
console.log(str3.endsWith("World")); // true
console.log(str3.includes("e")); //true
console.log(str3.includes("z")); //false
console.log(str3.includes("world")); //false
console.log(str3.includes("World")); //true
console.log(str.repeat(3)); //HelloHelloHello
console.log(num.padStart(3, "0")); // 003
