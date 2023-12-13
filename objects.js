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
