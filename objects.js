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
