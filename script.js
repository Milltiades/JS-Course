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

const sorted = faces.sort((a, b) => a < b);
console.log(sorted);

sorted.splice(6);
console.log(sorted);
