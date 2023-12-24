// var User = function (firstName, courseCount) {
//   this.firstName = firstName;
//   this.courseCount = courseCount;
//   this.getCourseCount = function () {
//     console.log(`Course count is: ${this.courseCount}`);
//   };
// };

// var person1 = new User("Gedeon", 2);
// var person2 = new User("Lasha", 3);

// console.log(person1, person2);
// person1.getCourseCount();
// person2.getCourseCount();

// new (class C extends class B {
//   constructor() {
//     console.log(this.foo());
//   }
// } {
//   #a = 1;
//   foo() {
//     return this.#a; // TypeError: Cannot read private member #a from an object whose class did not declare it
//     // It's not really because the class didn't declare it,
//     // but because the private field isn't initialized yet
//     // when the superclass constructor is running
//   }
// })();

// class ParentClass {
//   constructor() {
//     return 1;
//   }
// }

// console.log(new ParentClass());

// class ChildClass extends ParentClass {
//   constructor() {
//     return 1;
//   }
// }

// console.log(ChildClass);

// class Person {
//   constructor(name = "Anonymous") {
//     this.name = name;
//   }
//   introduce() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const person = new Person();
// person.introduce(); //Hello my name is Anonymous

// class Foo {
//   ["constructor"]() {
//     console.log("called");
//     this.a = 1;
//   }
// }

// const foo = new Foo();
// console.log(foo);
// foo.constructor();
// console.log(foo);

// Async methods, generator methods, accessors, and class fields are forbidden from being called constructor. Private names cannot be called #constructor. Any member named constructor must be a plain method.

// class Square extends Polygon {
//   constructor(length) {
//     super(length, length);
//     this.name = "Square";
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this.height = value ** 0.5;
//     this.width = value ** 0.5;
//   }
// }

// class Polygon {
//   constructor() {
//     this.name = "Polygon";
//   }
// }
// class Rectangle {
//   constructor() {
//     this.name = "Rectangle";
//   }
// }
// class Square extends Polygon {
//   constructor() {
//     super();
//   }
// }
// Object.setPrototypeOf(Square, Rectangle);

// const newInstance = new Square();

// console.log(newInstance instanceof Polygon); //true
// console.log(newInstance instanceof Rectangle); //false

// console.log(newInstance.name); //Rectangle

// function Car() {}
// const car1 = new Car();
// const car2 = new Car();

// console.log(car1.color);

// Car.prototype.color = "original color";
// console.log(car1.color);

// car1.color = "Black";
// console.log(car1.color);

// console.log(Object.getPrototypeOf(car1).color);
// console.log(Object.getPrototypeOf(car2).color);
// console.log(car1 instanceof Car); //true
// console.log(car2 instanceof Car); //true

// function Car(color) {
//   if (!new.target) {
//     return `${color} car`;
//   }
//   this.color = color;
// }

// const a = Car("red");
// const b = new Car("red");
// console.log(a);
// console.log(b);

// function Car(color) {
//   if (!new.target) {
//     return `${color} car`;
//   }
//   this.color = color;
// }

// const car1 = Car("red");
// console.log(car1);
// const car2 = new Car("red");
// console.log(car2);

// function Animal(name, species) {
//   this.name = name;
//   this.species = species;
// }

// Animal.prototype.makeSound = function () {
//   console.log("Some generic animal sound");
// };

// var genericAnimal = new Animal("Genercis", "Unknow");

// function Dog(name, breed) {
//   Animal.call(this, name, "Dog");
//   this.breed = breed;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.makeSound = function () {
//   console.log("Woof! Woof");
// };

// var MyDog = new Dog("Buddy", "Golden Retriever");
// genericAnimal.makeSound(); //Some generic animal sound
// MyDog.makeSound(); // Woof! Woof!

// // after

// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }

//   makeSound() {
//     console.log("Some generic animal sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name, "Dog");
//     this.breed = breed;
//   }
//   makeSound() {
//     console.log("Woof! Woof!");
//   }
// }

// const genericAnimal = new Animal("Generic", "Unknown");
// const myDog = new Dog("Buddy", "Golden Retriever");

// genericAnimal.makeSound(); // Some generic animal sound
// myDog.makeSound();

// class MathUtils {
//   static square(x) {
//     return x * x;
//   }
//   static cube(x) {
//     return x * x * x;
//   }
// }

// const squaredValue = MathUtils.square(4); // 16
// const cubedValue = MathUtils.square(3); // 27

// const test = new MathUtils();
// console.log(cubedValue);

// class Counter {
//   static instanceCount = 0;

//   constructor() {
//     Counter.instanceCount++;
//   }
// }

// const instance1 = new Counter();
// console.log(Counter.instanceCount);
// const instance2 = new Counter();
// console.log(Counter.instanceCount);

// const myObject = {
//   myMethod: () => {
//     console.log(this);
//   },
// };

// myObject.myMethod();

// class Test {
//   constructor() {
//     this.name = "giga";
//   }
//   foo = () => {
//     console.log("test: ", this);
//   };
// }

// const test1 = new Test();
// test1.foo();

// function loop(x) {
//   if (x >= 10) {
//     return;
//   }
//   loop(x + 1);
// }
// loop(0);

// function foo(i) {
//   if (i < 0) {
//     return;
//   }
//   console.log(`begin: ${i}`);
//   foo(i - 1);
//   console.log(`end : ${i}`);
// }
// foo(3);
// // 3;
// // 2;
// // 1;
// // 0;
// // 1;
// // 2;
// // 3;class
// class MyCLass {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`hello ${this.name}`);
//   }
// }
// const user = new MyCLass("Giga");
// user.sayHello();

// setTimeout(function () {
//   console.log("Timer");
// }, 3000);

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
//     console.log("Button cliked", ++count);
//   });
// }
// attachEventListeners();

//cosntructor functions
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// // Usage
// const john = new Person("John Doe", 25);

// //factory functions
// function createPerson(name, age) {
//   const person = {};
//   person.name = name;
//   person.age = age;
//   return person;
// }

// // Usage
// const jane = createPerson("Jane Doe", 30);

//Constructor Function
function Person(name, age) {
  // Properties are set using 'this'
  this.name = name;
  this.age = age;

  // A method can also be added
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  };
}

// Usage with 'new' keyword
const john = new Person("John Doe", 25);
john.sayHello(); // Output: Hello, my name is John Doe and I'm 25 years old.

// Factory Function
function createPerson(name, age) {
  // Object creation and initialization logic
  const person = {};
  person.name = name;
  person.age = age;

  // Additional methods can be added
  person.sayHello = function () {
    console.log(
      `Hello, my name is ${person.name} and I'm ${person.age} years old.`
    );
  };

  return person;
}

// Usage without 'new' keyword
const jane = createPerson("Jane Doe", 30);
jane.sayHello(); // Output: Hello, my name is Jane Doe and I'm 30 years old.

// function createPerson(name, age, profession) {
//   const person = {};
//   person.name = name;
//   person.age = age;
//   person.profession = profession;

//   person.sayHello = function () {
//     console.log(
//       `Hello, my name is ${person.name}, I am ${person.age} years old, and I work as a ${person.profession}.`
//     );
//   };

//   if (person.profession === "Developer") {
//     person.writeCode = function () {
//       console.log(`${person.name} is codding.`);
//     };
//   }

//   return person;
// }

// const make = createPerson("Giga", 27, "Developer");
// make.sayHello();
// make.writeCode();

// function CreatePerson(name, age, profession) {
//   this.name = name;
//   this.age = age;
//   this.profession = profession;

//   this.sayHello = function () {
//     console.log(
//       `Hello, my name is ${this.name}, I'm ${this.age} years old, and I work as a ${this.profession}.`
//     );
//   };
//   if (this.profession === "Developer") {
//     this.writeCode = function () {
//       console.log(`${this.name} is writing code.`);
//     };
//   }
// }

// const lasha = new CreatePerson("Lasha", 26, "Developer");

// lasha.sayHello();
// lasha.writeCode();

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// function SuperElement(type, content) {
//   this.el = document.createElement(type);
//   this.el.innerText = content;
//   document.body.append(this.el);
//   this.el.addEventListener("click", () => {
//     console.log(this.el);
//   });
// }

// const h1 = new SuperElement("h1", "This is title");
// const h2 = new SuperElement("h2", "This is subTitle");
// const button = new SuperElement("button", "This is button");

// const array = ["a", "b", "c"];

// const elements = array.map((el) => {
//   return new SuperElement("h1", el);
// });

// const array = [
//   {
//     element: "h1",
//     content: "This is title",
//   },
//   {
//     element: "h2",
//     content: "This is subTitle",
//   },
//   {
//     element: "p",
//     content: "This is text about something.",
//   },
//   {
//     element: "button",
//     content: "This is button",
//   },
// ];

// const elements = array.map((el) => new SuperElement(el.element, el.content));
