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
class MyCLass {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello ${this.name}`);
  }
}
const user = new MyCLass("Giga");
user.sayHello();
