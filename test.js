// // BOM -> DOM

// console.log(window.screen.height);
// console.log(window.screen.width);
// console.log(window.innerWidth);
// console.log(window.location.href);

// console.log(document.title);
// console.log(document.location.port);

// console.log(screen.width);
// console.log(screen.height);

// var element = document.getElementById("myElement");
// element.textContent = "New content";

// Reachability
// The currently executing function, its local variables and parameters.
// Other functions on the current chain of nested calls, their local variables and parameters.
// Global variables.
// (there are some other, internal ones as well)
// These values are called roots.

// let user = {
//   name: "John",
// };
// user = null;

// let user = {
//   name: "John",
// };
// let admin = user;
// user = null;

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }
// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// delete family.father;
// delete family.mother.husband;

// console.log(family);
// family = null;
// console.log(family);

// Generational collection – objects are split into two sets: “new ones” and “old ones”. In typical code, many objects have a short life span: they appear, do their job and die fast, so it makes sense to track new objects and clear the memory from them if that’s the case. Those that survive for long enough, become “old” and are examined less often.

// Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine splits the whole set of existing objects into multiple parts. And then clear these parts one after another. There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes, but we get many tiny delays instead of a big one.

// Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution

// initialization
// var x = 10;
// // Accessing
// if (x === 10) {
//   x = 20;
// }
// Removal
// 'x' removed from the memory

// let name = "codedamn";

// if (name === "codedamn") {
//   // Changing the value
//   name = "Codedamn!";
// }

// function sum() {
//   let x = 10;
//   let y = 20;
//   let sum = x + y;
// }

// console.log(x); // This will throw and error!

// let name = "Gedeon";
// let role = "Programmer";
// const age = 27;

// Stack -> numbers, strings, booleant and other primitive data types
// JavaScript uses the stack data structure to store static or fixed-size data.

// const memoryUsage = process.memoryUsage();

// // Format and print the output
// for (let [key, value] of Object.entries(memoryUsage)) {
//   const valueInMegabytes = Math.round((value / 1024 / 1024) * 100) / 100;
//   console.log(`${key}: ${valueInMegabytes} MB`);
// }

// let box1 = {
//   width: 100,
//   height: 50,
// };
// let box2 = box1;
// // let box2 = {
// //   width: 120,
// //   height: 80,
// // };

// let box3 = box2;

// box1.width = 150;
// box2.width = 200;
// box1.width = 50;
// box3.width = 1000;
// box3.height = 1000;

// console.log("Box 1 width", box1.width);
// console.log("Box 2 width", box2.width);
// console.log("Box 3 height", box3.height);

// var p = new Proxy(target, handler);

// var handler = {
//   get(target, key) {
//     return key in target ? target[key] : 37;
//   },
// };
// var p = new Proxy({}, handler);

// p.a = 1;
// p.b = undefined;

// console.log(p.a, p.b);
// console.log("c" in p, p.c);

// let validator = {
//   set: function (obj, prop, value) {
//     if (prop === "age") {
//       if (typeof value !== "number" || Number.isNaN(value)) {
//         console.log("Age must be a number");
//       }
//       if (value <= 0) {
//         console.log("Age must be a positive number");
//       }
//     }
//     obj[prop] = value;

//     return true;
//   },
// };

// let person = new Proxy({}, validator);
// person.age = "young";
// person.age = -30;
// person.age = 100;
// console.log(person.age);

// let validator = {
//   set: function (obj, prop, value) {
//     if (prop === "age") {
//       if (typeof value !== "number" || Number.isNaN(value)) {
//         console.log("ასაკი უნდა იყოს ციფრი!");
//       }

//       if (value <= 0) {
//         console.log("ასაკი უნდა იყოს დადებითი რიცხვი");
//       } else if (value < 18) {
//         console.log("ასაკი უნდა იყოს 18 წელს ზემოთ!");
//       }
//     }
//     obj[prop] = value;
//     return true;
//   },
// };

// let user = new Proxy({}, validator);
// user.age = "ახალგაზრდა";
// user.age = -1;
// user.age = 0;
// user.age = 12;
// user.age = 21;
// console.log(user.age);

// const person = {
//   age: 20,
//   name: "gedeon",
// };

// const p = new Proxy(person, {
//   get: (target, key) => {
//     if (key === "name") {
//       return target[key].toUpperCase();
//     } else if (key === "age") {
//       return target[key] * 2;
//     } else {
//       return target[key];
//     }
//   },
// });

// console.log(p.age);
// console.log(p.name);

// const validator = new Proxy(
//   {},
//   {
//     set: (target, key, value) => {
//       if (typeof value !== "number") {
//         console.error(
//           `Invalid value: ${value}. Please provide a number value.`
//         );
//         return false;
//       } else {
//         target[key] = value;
//         return true;
//       }
//     },
//   }
// );

// validator.number1 = 22; // alowed
// validator.number1 = "asda"; // Error

// const logger = new Proxy(
//   {},
//   {
//     get: (target, key) => {
//       console.log(`Property ${key} was accessed.`);
//       return target[key];
//     },
//     set: (target, key, value) => {
//       console.log(`Property ${key} was set to ${value}.`);
//       target[key] = value;
//       return true;
//     },
//   }
// );

// logger.name;
// logger.age = 27;

const defaults = new Proxy(
  { defaultProp: "This is the default value.", name: "giga" },
  {
    get: (target, key) => {
      return key in target ? target[key] : target.defaultProp;
    },
  }
);

console.log(defaults.names);
