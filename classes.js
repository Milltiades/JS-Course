// class Rectangle {
//   // Setup
//   constructor(_width, _height, _color) {
//     console.log("The Rectangle is being created!");

//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
//   printDescription() {
//     console.log(
//       `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`
//     );
//   }
// }

// let myRectangle1 = new Rectangle(5, 3, "blue");
// let myRectangle2 = new Rectangle(10, 5, "red");

// console.log(myRectangle1.getArea()); // 15
// console.log(myRectangle2.getArea()); // 50

// console.log(myRectangle1.printDescription());
// console.log(myRectangle2.printDescription());

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestsForArea = 0;
//   }

//   get area() {
//     this.numOfRequestsForArea++;
//     return this.width * this.height;
//   }

//   set area(area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square(4);

// square1.area = 25;
// console.log(square1.width);
// console.log(square1.height);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);

// console.log(square1.numOfRequestsForArea);

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }

//   static equals(a, b) {
//     return a.width * a.height === b.width * b.height;
//   }
//   static isValidDimensions(width, height) {
//     return width === height;
//   }
// }
// console.log(Square.isValidDimensions(4, 4)); //true
// console.log(Square.isValidDimensions(4, 5)); //false

// let square1 = new Square(9);
// let square2 = new Square(9);

// console.log(Square.isValidDimensions(7, 6)); //false
// console.log(Square.isValidDimensions(6, 6)); //true

// console.log(Square.equals(square1, square2)); //true

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(4, 8);
// const p2 = new Point(11, 6);

// console.log(Point.displayName);
// console.log(Point.distance(p1, p2));

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   static displayName = "Point";
//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;

//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(34, 13);
// const p2 = new Point(14, 17);

// console.log(Point.displayName);
// console.log(Point.distance(p1, p2));

// class Person {
//   constructor(_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }
//   describe() {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
// }
// class Programmer extends Person {
//   constructor(_name, _age, _yearsOfExperience) {
//     super(_name, _age);

//     //Custom behaviour
//     this.yearsOfExperience = _yearsOfExperience;
//   }
//   code() {
//     console.log(`${this.name} is coding`);
//   }
// }

// const programmers = [
//   new Programmer("Dom", 56, 12),
//   new Programmer("Jeff", 24, 4),
// ];

// function developSoftware(programmers) {
//   for (let programmer of programmers) {
//     programmer.code();
//   }
// }
// developSoftware(programmers);

// let person1 = new Person("Jeff", 45);
// let programmer1 = new Programmer("Dom", 56, 12);

// programmer1.code(); //Dom is coding
// person1.code(); // TypeError person1.code is not a function

// console.log(person1);
// console.log(programmer1);

// programmer1.describe();
// person1.describe();

// class Main {
//   constructor(_name, _surname) {
//     this.name = _name;
//     this.surname = _surname;
//   }
//   declare() {
//     console.log(`I am ${this.name} ${this.surname}`);
//   }
// }

// class Programmer extends Main {
//   constructor(_name, _surname, _age) {
//     super(_name, _surname);
//     this.age = _age;
//   }
//   declareWithAge() {
//     console.log(`I am ${this.name} ${this.surname} ${this.age} years old!`);
//   }
// }

// const Giga = new Programmer("Giga", "Kakulia", 27);
// const Lasha = new Programmer("Lasha", "Kakulia", 26);
// const Irakli = new Programmer("Irakli", "Khasaia", 27);
// Giga.declare();
// Giga.declareWithAge();
// Lasha.declare();
// Lasha.declareWithAge();
// Irakli.declare();
// Irakli.declareWithAge();

// class Cars {
//   constructor(_model, _age) {
//     this.model = _model;
//     this.age = _age;
//   }

//   chooseCar() {
//     console.log(`I take ${this.model} and its created in ${this.age}.`);
//   }
// }

// class NewCars extends Cars {
//   constructor(_name, _age, _color) {
//     super(_name, _age);
//     this.color = _color;
//   }

//   chooseNewCar() {
//     console.log(
//       `I take ${this.model} and its created in ${this.age}, also it is ${this.color}.`
//     );
//   }
// }

// let mercedes = new NewCars("Mercedes", 2011, "Gray");
// let volkswagen = new NewCars("Volkswagen", 2015, "Black");

// const takenCars = [
//   new NewCars("Mercedes", 2011, "Gray"),
//   new NewCars("Volkswagen", 2015, "Black"),
// ];

// function getAllCars(takenCars) {
//   for (let cars of takenCars) {
//     cars.chooseNewCar();
//   }
// }
// getAllCars(takenCars);

// mercedes.chooseCar();
// volkswagen.chooseCar();

// mercedes.chooseNewCar();
// volkswagen.chooseNewCar();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log("generic animal sound!");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   makeSound() {
//     console.log("Woof! Woof!");
//   }
// }
// const a1 = new Animal("Dom");
// const a2 = new Dog("Jeff");
// a1.makeSound();
// a2.makeSound();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log("generic animal sound!");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name);
//   }

//   makeSound() {
//     super.makeSound();
//     console.log("Woof! Woof!");
//   }
// }
// const a1 = new Animal("Dom");
// const a2 = new Dog("Jeff");
// a1.makeSound();
// a2.makeSound();

// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//   makeNoise() {
//     console.log(`${this.name} ღრიალებს!`);
//   }
// }

// class newHuman extends Human {
//   constructor(name) {
//     super(name);
//   }
//   makeNoise() {
//     super.makeNoise();
//     console.log(`${this.name} უფრო ღრიალებს!`);
//   }
// }

// let giga = new Human("გიგა");
// let lasha = new newHuman("ლაშა");
// giga.makeNoise();
// lasha.makeNoise();

const myList = document.getElementById("myList");
const listBinding = new ListBinding(myList);
