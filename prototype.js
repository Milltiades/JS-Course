// const dude = {};

// dude.name = "Sinnnna";

// dude.age = 34;

// console.log(dude);

// const myBrothers = ["Ben", "Sam"];

// const name = "Sina";

// const human = {
//   kind: "Human",
// };
// const sina = Object.create(human);
// sina.age = 34;

// const ben = Object.create(sina);

// console.log(ben); // {}
// console.log(ben.age); // 34
// console.log(ben.kind); // Human
// ben.age = 12;
// console.log(ben.age); // 12

// class Human {
//   talk() {
//     return "Talking";
//   }
// }

// class SuperHuman extends Human {
//   fly() {
//     return "Flying";
//   }
// }
// const ben = new SuperHuman();

// console.log(ben.fly()); // Flying
// console.log(ben.talk()); // Talking
// console.log(ben);

// function Dude(name) {
//   this.name = name;
// }
// const me = new Dude("giga");

// let log = console.log;

// let myObj = {}; // new Object()
// log(myObj.constructor); // function Object(){}

// log(myObj.__proto__ === myObj.constructor.prototype);

// function Cat() {}

// let kitty = new Cat();
// log(kitty.__proto__ === Cat.prototype);
// log(kitty.__proto__.__proto__ === Object.prototype);
// log(Object.prototype.__proto__);
// log(kitty.__proto__.__proto__.__proto__);

// function Animal() {}

// Object.setPrototypeOf(Cat.prototype, Animal.prototype);

// log(kitty.__proto__);
// log(kitty.__proto__.__proto__);
// log(kitty.__proto__.__proto__.__proto__);
// log(kitty.__proto__.__proto__.__proto__.__proto__);

// let cat = {
//   breed: "munchkin",
// };

// let myCat = {
//   name: "Fluffykins",
// };

// Object.setPrototypeOf(myCat, cat);

// console.log(myCat); //{name: 'Fluffykins'}
// console.log(myCat.breed); // munchkin

// console.log(myCat.__proto__); //{breed: 'munchkin'}
// cat.tailLength = 15;
// console.log(myCat.__proto__); //{breed: 'munchkin', tailLength: 15}
// console.log(myCat.tailLength); // 15

function Dog() {}
Dog.prototype.breed = "Bulldog";

let myDoggie = new Dog();
// console.log(myDoggie.breed); // Bulldog

console.log(myDoggie.__proto__); //{breed: 'Bulldog', constructor: ƒ}
console.log(myDoggie.prototype); //undefined
console.log(Dog.prototype); //{breed: 'Bulldog', constructor: ƒ}

function Girrafe() {}

console.log(Girrafe.prototype); // {constructor: ƒ}
let koala = {};
console.log(koala.prototype); //undefined
console.log(koala.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(koala.__proto__ === Object.prototype); // true

Object.prototype.waffle = "sdjksfskfjskfj";
console.log(koala.waffle); //sdjksfskfjskfj
