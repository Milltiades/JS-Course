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

// function Dog() {}
// Dog.prototype.breed = "Bulldog";

// let myDoggie = new Dog();
// // console.log(myDoggie.breed); // Bulldog

// console.log(myDoggie.__proto__); //{breed: 'Bulldog', constructor: ƒ}
// console.log(myDoggie.prototype); //undefined
// console.log(Dog.prototype); //{breed: 'Bulldog', constructor: ƒ}

// function Girrafe() {}

// console.log(Girrafe.prototype); // {constructor: ƒ}
// let koala = {};
// console.log(koala.prototype); //undefined
// console.log(koala.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// console.log(koala.__proto__ === Object.prototype); // true

// Object.prototype.waffle = "sdjksfskfjskfj";
// console.log(koala.waffle); //sdjksfskfjskfj

// Assignebt operators =

// x = f(); // x = f() Assignment
// x += f(); //x = x + f() Addition assignment
// x -= f(); //x = x - f() Subtraction assignment
// x *= f(); //x = x * f() Multiplication assignment
// x /= f(); //x = x / f() Division assignment
// x %= f(); //x = x % f() Remainder assignment
// x **= f(); //x = x ** f() Exponentiation assignment
// x <<= f(); //x = x << f() Left shift assignment
// x >> f(); //x = x >> f() Right shift assignment
// x >>>= f(); //x = x >>> f() Unsigned right shift assignment
// x &= f(); //x = x & f() Bitwise AND assignment
// x ^= f(); //x = x ^ f() Bitwise XOR assignment
// x |= f(); //x = x | f() Bitwise OR assignment
// x &&= f(); //x && (x = f()) Logical AND assignment
// x ||= f(); //x || (x = f()) Logical OR assignment
// x ??= f(); //x ?? (x = f()) Nullish coalescing assignment

// const obj = {};

// obj.x = 3;

// console.log(obj.x); // 3
// console.log(obj); // Prints { x: 3 }.

// const key = "y";
// obj[key] = 5;
// console.log(obj[key]); // Prints 5
// console.log(obj); // Prints { x: 3, y: 5 }.

// const val = 0;
// val.x = 3;

// console.log(val.x); // Prints undefined.
// console.log(val); // Prints 0.

// const foo = ["one", "two", "three"];

// const one = foo[0];
// const two = foo[1];
// const three = foo[2];

// const [one, two, three] = foo;

// let x;
// const y = (x = f()); // Or equivalently: const y = x = f();
// console.log(y); // Logs the return value of the assignment x = f().

// console.log((x = f())); // Logs the return value directly.

// // An assignment expression can be nested in any place
// // where expressions are generally allowed,
// // such as array literals' elements or as function calls' arguments.
// console.log([0, (x = f()), 0]);
// console.log(f(0, (x = f()), 0));

// function f() {
//   console.log("F!");
//   return 2;
// }
// function g() {
//   console.log("G!");
//   return 3;
// }

// let x, y;

// y = x = f();

// y = [f(), (x = g())];
// x[f()] = g();

// const var1 = 3;
// const var2 = 4;

// 3 == var1;
// "3" == var1;
// 3 == "3";

// var1 != 4;
// var2 != 3;

// 3 === var1;
// var1 !== "3";
// 3 !== "3";

// var2 > var1;
// "12" > 2;

// var2 >= var1;
// var1 >= 3;

// var1 < var2;
// "2" < 12;

// var1 <= var2;
// var2 <= 5;

// 1 / 2; // 0.5
// 1 / 2 === 1.0 / 2.0; // this is true

// let num = 3;
// console.log(++num, num); // 4 4
// let num1 = 3;
// console.log(num1++, num1); // 3 4

// let x = 3;
// console.log(--x); // 2
// console.log(x); // 2

// let y = 3;
// console.log(y--); // 3
// console.log(y); //2

// let z = 3;
// console.log(-z); // -3

// console.log(+"3"); // 3 as a number
// console.log(+true); // 1

// let q = 2;
// console.log(q ** 3); // 8
// console.log(10 ** -1); // 0.1
// console.log(10 ** -3); // 0.001

// const a = 5; // 00000000000000000000000000000101
// const b = 3; // 00000000000000000000000000000011

// console.log(a & b); // 00000000000000000000000000000001 1

// const c = 12; // 00000000000000000000000000001100    12
// const d = 8; //  00000000000000000000000000001000   8

// console.log(c & d); // 00000000000000000000000000001000  8

// const a = 5; // 00000000000000000000000000000101
// const b = 3; // 00000000000000000000000000000011

// console.log(a | b); // 00000000000000000000000000000111 7

// const c = 12; // 00000000000000000000000000001100    12
// const d = 8; //  00000000000000000000000000001000   8

// console.log(c | d); // 00000000000000000000000000001100 12

// const a = 5; // 00000000000000000000000000000101
// const b = 3; // 00000000000000000000000000000011

// console.log(a ^ b); // 00000000000000000000000000000110 6

// const a = 7; // 000111
// const b = 12; // 0000000001100
// const d = -12; // 1111111110011
// // 1111111110100

// console.log(a << b); //00011100000000  1792

// const g = 15; // 00001111
// const h = -15; // 11110001

// const a = 17; // 000000010001
// const b = -17; // 111111101111

// const a1 = true && true; // t && t returns true
// const a2 = true && false; // t && f returns false
// const a3 = false && true; // f && t returns false
// const a4 = false && 3 === 4; // f && f returns false
// const a5 = "Cat" && "Dog"; // t && t returns Dog
// const a6 = false && "Cat"; // f && t returns false
// const a7 = "Cat" && false; // t && f returns false

// const o1 = true || true; // t || t returns true
// const o2 = false || true; // f || t returns true
// const o3 = true || false; // t || f returns true
// const o4 = false || 3 === 4; // f || f returns false
// const o5 = "Cat" || "Dog"; // t || t returns Cat
// const o6 = false || "Cat"; // f || t returns Cat
// const o7 = "Cat" || false; // t || f returns Cat

// const n1 = !true; // !t returns false
// const n2 = !false; // !f returns true
// const n3 = !"Cat"; // !t returns false

// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [x, x, x, x, x];

// for (let i = 0, j = 9; i <= j; i++, j--) {
//   //                              ^
//   console.log(`a[${i}][${j}]= ${a[i][j]}`);
// }

// const myFun = [1, 2, 3, 4, 5];

// console.log(typeof myFun);

// typeof blur; // returns "function"
// typeof eval; // returns "function"
// typeof parseInt; // returns "function"
// typeof shape.split; // returns "function"

// typeof Date; // returns "function"
// typeof Function; // returns "function"
// typeof Math; // returns "object"
// typeof Option; // returns "function"
// typeof String; // returns "function"

// const theDay = new Date(1995, 12, 17);
// if (theDay instanceof Date) {
//   // statements to execute
// }

// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet();

// Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// console.log(Object.getPrototypeOf(myObject));

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// const myDate = new Date(1995, 11, 17);
// console.log(myDate.getYear()); //95

// myDate.getYear = function () {
//   console.log("Something else");
// };

// myDate.getYear(); // 'something else!'

// const personPrototype = {
//   greet() {
//     console.log(`hello`);
//   },
// };

// const carl = Object.create(personPrototype);

// carl.greet();

// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
// };

// function Person(name) {
//   this.name = name;
// }

// Object.assign(Person.prototype, personPrototype);

// const reuben = new Person("Reuben");
// reuben.greet(); //hello, my name is Reuben!

// const firstPrototype = {
//   dance() {
//     console.log(`${this.name} loves dancing very much!`);
//   },
// };

// function Dancer(name) {
//   this.name = name;
// }

// Object.assign(Dancer.prototype, firstPrototype);

// const giga = new Dancer("Gedeon");

// giga.dance(); // Gedeon loves dancing very much!

// const firstPrototype = {
//   driving() {
//     console.log(`${this.name} drives very fast!`);
//   },
// };

// function Driver(name) {
//   this.name = name;
//   this.dance = function () {
//     console.log(`${this.name} loves dancing also!`);
//   };
// }

// Object.assign(Driver.prototype, firstPrototype);

// const giga = new Driver("Giga");
// giga.driving(); // Giga drives very fast!
// giga.dance(); // Giga loves dancing also!

// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
//   talk() {
//     console.log("everyone talking!");
//   },
// };

// function Person(name) {
//   this.name = name;
//   this.dance = "dancing";
// }

// Object.assign(Person.prototype, personPrototype);
// // or
// // Person.prototype.greet = personPrototype.greet;

// const irma = new Person("Irma");
// console.log(irma.dance); // dancing
// irma.talk();

// console.log(Object.hasOwn(irma, "name")); //true
// console.log(Object.hasOwn(irma, "greet")); //false
// console.log(Object.hasOwn(irma, "dance")); //true
// console.log(Object.hasOwn(irma, "talk")); //false

const PersonPrototype = {
  talking() {
    console.log(`${this.name} loves talking so much!`);
  },
};

function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, PersonPrototype);

const giga = new Person("giga");

console.log(Object.hasOwn(giga, "name")); //true
giga.talking(); // giga loves talking so much!
