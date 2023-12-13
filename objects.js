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

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

// const myCar = new Car("Eagle", "Talon TSi", 1993);

// console.log(myCar);

// const opel = new Car("Opel", "Astra", 2000);
// console.log(opel);

function Academy(founder, field, openingYear) {
  this.founder = founder;
  this.field = field;
  this.openingYear = openingYear;
}

const gedit = new Academy("Gedeon", "IT", 2024);
const myCar = new Car("Mercedes-Benz", "C class", 2011, gedit);

// console.log(myCar);
myCar.color = "Gray";
myCar.owner.isSchool = "yes";
console.log(myCar);
