// const obj = {
//   property1: value1, // property name may be an identifier
//   2: value2, // or a number
//   "property n": value3, // or a string
// };

// let x;
// if (cond) {
//   x = { greeting: "hi there" };
// }

// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };

// console.log(myHonda);

// function Car(make, model, year, owner) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.owner = owner;
// }

// const myCar = new Car("Eagle", "Talon TSi", 1993);

// console.log(myCar);

// const opel = new Car("Opel", "Astra", 2000);
// console.log(opel);

// function Academy(founder, field, openingYear) {
//   this.founder = founder;
//   this.field = field;
//   this.openingYear = openingYear;
// }

// const gedit = new Academy("Gedeon", "IT", 2024);
// const myCar = new Car("Mercedes-Benz", "C class", 2011, gedit);

// console.log(myCar);
// myCar.color = "Gray";
// myCar.owner.isSchool = "yes";
// console.log(myCar);

// const Animal = {
//   type: "Invertebrates",
//   displayType() {
//     console.log(this.type);
//   },
// };

// const animal1 = Object.create(Animal);
// animal1.displayType();

// const fish = Object.create(Animal);
// fish.type = "Fishes";
// fish.displayType();

// const Books = {
//   type: "Romance",
//   displayType() {
//     console.log(this.type);
//   },
// };

// const romeAndJuliet = Object.create(Books);
// romeAndJuliet.displayType();

// const ring = Object.create(Books);
// ring.type = "Horror";
// ring.displayType();

// const Car = {
//   type: "Car type",
//   engine: "",
//   displayProperties() {
//     console.log(`This car type is: ${this.type} and engine is ${this.engine}`);
//   },
// };

// const w204 = Object.create(Car);
// w204.type = "Coupe";
// w204.engine = 1.8;
// w204.displayProperties();

// const myCar = {
//   make: "Ford",
//   model: "Mustang",
//   year: 1969,
// };

// console.log(myCar.make); // Dot notation
// console.log(myCar["model"]); // Bracket notation

// myCar["year"] = 2017;
// console.log(myCar);

// const myObj = {};
// const str = "myString";
// const rand = Math.random();
// const anotherObj = {};

// myObj.type = "Dot syntax for a key named type";
// myObj["date created"] = "this key has a space";
// myObj[str] = "This key is in variable str";
// myObj[rand] = "A random number is the key here";
// myObj[anotherObj] = "this key is object anotherObj";
// myObj[""] = "tHIS KEY IS AN EMPTY STRING";
// myObj["giga"] = "it is my name giga";
// // console.log(myObj);

// console.log(myObj.giga);
// console.log(myObj["myString"]);
// console.log(myObj.myString);
// console.log(myObj["giga"]);
// const myCar = {};

// let propertyName = "make";
// myCar[propertyName] = "Ford";

// // access different properties by changing the contents of the variable
// propertyName = "model";
// myCar[propertyName] = "Mustang";

// console.log(myCar); // { make: 'Ford', model: 'Mustang' }

// console.log(myCar.nonexistentProperty); //undefined

// function showProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     if (Object.hasOwn(obj, i)) {
//       result += `${objName}.${i} = ${obj[i]}\n`;
//     }
//   }
//   console.log(result);
// }
// function showProps(obj, objName) {
//   let result = "";
//   Object.keys(obj).forEach((i) => {
//     result += `${objName}.${i} = ${obj[i]}\n`;
//   });
//   console.log(result);
// }

// function listAllProperties(myObj) {
//   let objectToInspect = myObj;
//   let result = [];

//   while (objectToInspect !== null) {
//     result = result.concat(Object.getOwnPropertyNames(objectToInspect));
//     objectToInspect = Object.getPrototypeOf(objectToInspect);
//   }

//   return result;
// }

// Creates a new object, myobj, with two properties, a and b.
// const myobj = new Object();
// myobj.a = 5;
// myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
// delete myobj.a;
// console.log("a" in myobj); // false

// const myCars = new Object();

// myCars["1"] = "mercedes";
// myCars["2"] = "volkswagen";

// console.log(myCars);
// delete myCars["1"];
// console.log(myCars);

// const Manager = {
//   name: "Karina",
//   age: 27,
//   job: "Spftware Engineer",
// };

// const Intern = {
//   name: "Tyrone",
//   age: 21,
//   job: "Software Engineer Intern",
// };

// function sayHi() {
//   console.log(`Hello, my name is ${this.name}`);
// }
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;

// Manager.sayHi();
// Intern.sayHi();

// const obj1 = {
//   item: "box",
//   material: "wood",
//   weight: "20 T",
// };

// const obj2 = {
//   item: "box",
//   material: "iron",
//   weight: "55 T",
// };

// function whatIs() {
//   console.log(
//     `It is ${this.item} made with ${this.material} and weights: ${this.weight}`
//   );
// }

// obj1.whatIs = whatIs;
// obj2.whatIs = whatIs;
// obj1.whatIs();
// obj2.whatIs();

// const computer1 = {
//   cpu: "i-5",
//   ram: 16,
//   gpu: "rtx 3060",
// };
// const computer2 = {
//   cpu: "i-7",
//   ram: 32,
//   gpu: "rtx 3080",
// };

// function chooseComputer() {
//   console.log(`This is best choice :${this.cpu} with ${this.gpu}`);
// }
// computer1.chooseComputer = chooseComputer;
// computer2.chooseComputer = chooseComputer;

// computer1.chooseComputer();
// computer2.chooseComputer();

// const obj = {
//   a: 10,
//   d: 30,
//   get b() {
//     return this.a * 2;
//   },
//   set c(x) {
//     this.d = x / 2;
//   },
// };

// console.log(obj.b);
// obj.c = 1000;
// console.log(obj.d);

// const obj = {
//   name: "giga",
//   surname: "",
//   get myName() {
//     return this.name;
//   },
//   set setSurname(addSurname) {
//     this.surname = addSurname;
//   },
//   human: function () {
//     console.log(`My name is ${this.name} and my surname is ${this.surname}`);
//   },
// };
// console.log(obj);
// console.log(obj.name);
// console.log(obj.surname);
// obj.surname = "kakulia";
// console.log(obj.surname);
// console.log(obj.human());

// const myObj = { a: 0 };

// Object.defineProperties(myObj, {
//   b: {
//     get() {
//       return this.a + 1;
//     },
//   },
//   c: {
//     set(x) {
//       this.a = x / 2;
//     },
//   },
// });

// myObj.c = 10;
// console.log(myObj.b);

// const obj = { a: 10 };

// Object.defineProperties(obj, {
//   b: {
//     get() {
//       return this.a + 5;
//     },
//   },
//   c: {
//     set(x) {
//       this.a = x * x;
//     },
//   },
// });

// console.log(obj.b);
// obj.c = 2;
// console.log(obj.b);

// const testObj = { items: 10 };

// Object.defineProperties(testObj, {
//   a: {
//     get() {
//       return this.items - 3;
//     },
//   },
//   b: {
//     set(num) {
//       this.items = num;
//     },
//   },
// });

// console.log(testObj.items);
// console.log(testObj.a);
// testObj.b = 5;
// console.log(testObj.items);
// console.log(testObj.a);

// Two variables, two distinct objects with the same properties
// const fruit = { name: "apple" };
// const fruitBear = { name: "apple" };

// fruit == fruitBear; // return false
// fruit === fruitBear; // return false

// const fruit = { name: "apple" };
// const fruitBear = fruit;

// fruit == fruitBear; // true
// fruit === fruitBear; // true

// fruit.name = "grape";
// console.log(fruitBear); //name: grape

// const obj1 = { a: 5 };
// const obj2 = { a: 5 };

// console.log(obj1 == obj2); //false
// console.log(obj1 === obj2); //false

// const obj1 = { a: 5 };
// const obj2 = obj1;
// console.log(obj1 == obj2); //true
// console.log(obj1 === obj2); //true

// const myObj = { name: "dave" };
// console.log(myObj.name); //dave
// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["eat", "sleep", "code"],
//   beverage: {
//     morning: "coffee",
//     afternoon: "iced tea",
//   },
//   action: function () {
//     return "Hello World";
//   },
//   secondAction: function () {
//     return `This for ${this.beverage.morning}`;
//   },
// };
// console.log(anotherObj.alive); //true
// console.log(anotherObj.hobbies[1]); //sleep
// console.log(anotherObj["beverage"].morning); //coffee
// console.log(anotherObj["beverage"]["afternoon"]); //iced tea
// console.log(anotherObj.action()); //hello world
// console.log(anotherObj.secondAction()); //This for coffee

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vrrooom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); //inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Whoooooash!";
// };

// console.log(car.engine());
// console.log(car.wheels);

// const tesla = Object.create(car);
// console.log(tesla.engine());
// console.log(tesla.wheels);
// console.log(tesla.doors);
// tesla.engine = function () {
//   return "Shhhhhh";
// };
// console.log(tesla.engine());

// const band = {
//   vocals: "Robert Plant",
//   guitar: "Jimmy Page",
//   bass: "John Paul jones",
//   drums: "John Bonham",
// };

//destructuring objects

// const { guitar, bass, drums } = band;
// console.log(drums); //John Bonham
// console.log(bass); //John Paul jones
// console.log(guitar); //Jimmy Page

// function sings({ vocals }) {
//   return `${vocals} sings!`;
// }
// console.log(sings(band));
// const { guitar: myVariable, bass: myBass } = band;

// console.log(myVariable); // Jimmy Page
// console.log(myBass); // Jimmy Page

// delete band.drums; //delete drums
// console.log(band.hasOwnProperty("drums")); //false
// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}!`);
// }

// const cars = {
//   model1: "opel",
//   model2: "mercedes",
//   model3: "gaz",
//   model4: "volkswagen",
// };

// function chooseOne({ model1, model2 }) {
//   return `${model2} is better then ${model1}`;
// }
// console.log(chooseOne(cars));

// const obj = {
//   spider: "spider",
//   legs: 0,
//   legs: 10,
//   legs: 23,
// };

// console.log(obj.legs);

// const spider = "spider";
// const random = () => Math.random().toString(35).slice(-5);

// const obj = {
//   spider,
//   [random()]: true,
// };

// console.log(obj);

// function Zombie(name) {
//   this.name = name;
//   this.reanimated = Date.now();

//   this.eatBrain = function () {
//     return `${this.name} is hungry for brain`;
//   };
// }
// const obj = new Zombie("Jeff");

// console.log(obj.eatBrain()); //Jeff is hungry for brain

// console.log("hello world");

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);

// //Constructor function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const another = new Circle(1);
// console.log(another);

// let x = {};

// let x = new Object();

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// const Circle1 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// `
// );

// const circle = new Circle1(1);

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// console.log(x); // 20
// console.log(y); // 10

// let obj = { value: 10 };

// function increase(obj) {
//   obj.value++;
// }
// increase(obj);
// console.log(obj);

// value types also called primitives and reference types
// value types : {
//   Number,
//   String,
//   Boolean,
//   Symbol,
//   undefined,
//   null
// }
// reference types: {
//   Object,
//   Function,
//   Array
// }
// Primitives are copied by their value
// Objects are copied by their reference

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// // user.token = 'asdfafaf';
// circle.location = { x: 1 };

// const propertyName = "center-location";
// circle["center-location"] = { y: 22 };
// // const propertyName = "location";
// // circle[propertyName] = { x: 15 };
// // circle["location"] = { x: 1 };

// delete circle.location; //delete location property

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);

// for (let key in circle) {
//   if (typeof circle[key] !== "function") {
//     console.log(key, circle[key]);
//   }
// }
// // output only radius 10

// const keys = Object.keys(circle);
// console.log(keys); // ['radius', 'draw']

// if ("radius" in circle) {
//   console.log("Circle has a radius");
// }

// if ("draw" in circle) {
//   console.log("Circle has a draw");
// }

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = {
//     x: 0,
//     y: 0,
//   };

//   let computeOptimumLocation = function (factor) {};
//   this.draw = function () {
//     computeOptimumLocation(0.1);
//     // defaultLocation
//     // this.radius

//     console.log("draw");
//   };
// }
// const circle = new Circle(10);
// circle.draw();

//abstraction means : hide the details and show the essentials

// function Circle(radius) {
//   this.radius = radius;

//   let defaultLocation = { x: 0, y: 0 };
//   this.getDefaultLocation = function () {
//     return defaultLocation;
//   };

//   this.draw = function () {
//     console.log("draw");
//   };
//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       if (!value.x || !value.y) {
//         throw new Error("Invalid location.");
//       }
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// // circle.defaultLocation;
// circle.draw();

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;
//   this.start = function () {
//     if (running) throw new Error("Stopwatch has already started.");

//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch is not started.");
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };

//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }
// const sw = new Stopwatch();

// function Stopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;
//   this.start = function () {
//     if (running) throw new Error("Stopwatch already started");
//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch is not started");
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function () {
//     running = false;
//     startTime = null;
//     endTime = null;
//     duration = 0;
//   };
//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }
// const sw = new Stopwatch();

// function myStopwatch() {
//   let startTime,
//     endTime,
//     running,
//     duration = 0;
//   this.start = function () {
//     if (running) throw new Error("Stopwatch is already started");
//     running = true;
//     startTime = new Date();
//   };
//   this.stop = function () {
//     if (!running) throw new Error("Stopwatch is not started");
//     running = false;
//     endTime = new Date();
//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//   };
//   this.reset = function () {
//     startTime = null;
//     endTime = null;
//     running = false;
//     duration = 0;
//   };
//   Object.defineProperty(this, "duration", {
//     get: function () {
//       return duration;
//     },
//   });
// }
// const sw = new myStopwatch();

// Declaration
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// //Expression, the class is anonymous but assigned to a variable
// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// //Expression, the class has its own name
// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea;
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
//   *getSides() {
//     yield this.height;
//     yield this.width;
//     yield this.height;
//     yield this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area);
// console.log([...square.getSides()]);

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
