// method -> obj
// function -> global(window, global)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],

//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this);
//   },
// };

// video.showTags();

// video.stop = function () {
//   console.log(this);
// };
// video.play();
// video.stop();

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b"); // {}

// const smth = {
//   title: "Cool Cars",
//   cars: ["mercedes", "opel", "volkswagen"],
//   showCars() {
//     this.cars.forEach(function (car) {
//       console.log(car);
//     });
//   },
// };

// smth.showCars();

// const smth = {
//   title: "Cool Car = ",
//   cars: ["mercedes", "opel", "volkswagen"],
//   showCars() {
//     this.cars.forEach(function (car) {
//       console.log(this.title, car);
//     }, this);
//   },
// };

// smth.showCars();

// const dogs = {
//   title: "My preferred dog is:",
//   dogsArr: ["pitbull", "chihuahua", "pudel"],
//   chooseDog() {
//     this.dogsArr.forEach(function (dog) {
//       console.log(this.title, dog);
//     }, this);
//   },
// };

// dogs.chooseDog();

// function whodis() {
//   console.log(this);
// }

// const jeff = {
//   face: " 🤦 ",
//   whodis,
// };

// jeff.whodis();

// const itsJeff = whodis.bind(jeff);

// itsJeff();

// function Horse(name) {
//   this.name = name;
//   this.sayHello = function () {
//     console.log(this.name);
//   };
// }

// const myHorse = new Horse("Secretariat");

// myHorse.sayHello();

// class Hello extends Component {
//   init() {
//     this.doSomething();
//   }
// }

// function thisIsFun() {
//   console.log(this);
// }

// thisIsFun();

// const jeff = {
//   face: "🤦 ",

//   whodis: function () {
//     console.log(this); // this is jeff
//   },
//   butWhoAmI: () => console.log(this), //global
// };

// jeff.whodis();
// jeff.butWhoAmI();

// function showFace() {
//   return this.face;
// }

// const jeff = {
//   face: "😇",
// };

// console.log(showFace.apply(jeff));
// console.log(showFace.call(jeff));

// const showJeffsFace = showFace.bind(jeff);

// console.log(showJeffsFace()); // 😇

// const Fun = (props) => (
//   <div>
//     <h1>Hello, {props.name}</h1>
//   </div>
// );

// class Classic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myState: true,
//     };
//   }
// }

// function Horse(name) {
//   this.name = name;

//   this.camera = function () {
//     console.log("📷📷📷");
//     return this; // add return this to make chain
//   };
// }

// const myHorse = new Horse("Bucefal");
// myHorse.camera().camera();

// function Foo(name) {
//   this.name = name;
//   this.sayName = function () {
//     console.log(`My name is ${this.name}`);
//     return this;
//   };
// }

// const myName = new Foo("Giga");
// myName.sayName().sayName().sayName();

// My name is Giga
// My name is Giga
// My name is Giga

// function Horse(color) {
//   this.color = color;
//   this.sayColor = function () {
//     console.log(`This horse is ${this.color}`);
//     return this;
//   };
// }

// const myHorse = new Horse("Black");
// myHorse.sayColor().sayColor();

// if (true) {
//   console.log(this);
// }

// function talk() {
//   return this;
// }

// const me = {
//   name: "giga",
//   talk,
// };

// function talk() {
//   return `I am ${this.name}`;
// }

// const me = {
//   name: "Giga",
//   talk,
// };

// const you = {
//   name: "Lasha",
//   talk,
// };

// function talk() {
//   return `I am ${this.name}`;
// }
// const me = {
//   name: "Giga",
// };
// const meTalk = talk.bind(me);
// console.log(meTalk());

// function talk() {
//   return `I am ${this.name}`;
// }

// const me = {
//   name: "Gedeon",
// };
// console.log(talk.call(me)); //I am Gedeon

// function talk(lang) {
//   if (lang === "en") {
//     return `I am ${this.name}`;
//   } else if (lang === "it") {
//     return `Io sono ${this.name}`;
//   }
// }

// const me = {
//   name: "Giga",
// };

// console.log(talk.call(me)); // undefined
// console.log(talk.call(me, "en")); // I am Giga
// console.log(talk.call(me, "it")); // Io sono Giga

// function talk(lang, isPolite) {
//   if (isPolite) {
//     if (lang === "en") {
//       return `Hello, I am ${this.name}`;
//     } else if (lang === "it") {
//       return `Ciao bella, sono ${this.name}`;
//     }
//   }

//   if (!isPolite) {
//     if (lang === "en") {
//       return `${this.name}, what you wnat?`;
//     } else if (lang === "it") {
//       return `Sono ${this.name}, ?`;
//     }
//   }
// }

// const me = {
//   name: "Giga",
// };

// console.log(talk.call(me, "en", false)); //Giga, what you wnat?
// console.log(talk.call(me, "it", true)); //Ciao bella, sono Giga

// console.log(talk.apply(me, ["en", true])); //Hello, I am Giga
// console.log(talk.apply(me, ["it", false])); //Sono Giga, ?

// function Person(n) {
//   this.name = n;
//   this.talk = function () {
//     console.log(this);
//   };
//   setTimeout(
//     function () {
//       console.log(this);
//     }.bind(this),
//     100
//   );
// }

// const me = new Person("Gedeon");
// me.talk();

// function Person(name) {
//   this.name = name;
//   this.talk = function () {
//     console.log(`${this.name} is talking!`);
//   };
//   setTimeout(
//     function () {
//       console.log(`Listen to ${this.name}`);
//     }.bind(this),
//     100
//   );
//   setTimeout(() => {
//     console.log(`Listen to ${this.name}`);
//   }, 100);
// }

// const me = new Person("Gedeon");
// me.talk();

// 1.In this case, bind(this) is used to explicitly set the value of this inside the callback function to the current instance of the Person object. This is necessary because in JavaScript, the value of this inside a function depends on how the function is called. By using bind(this), you are ensuring that this inside the callback refers to the Person instance created by new Person("Gedeon").

// 2.Arrow functions do not have their own this context; instead, they inherit the this value from the enclosing scope. In this case, the arrow function is part of the Person constructor, so it captures the this value from the surrounding context, which is the instance of the Person object. Therefore, there is no need for bind(this) when using an arrow function.

// In summary, the use of bind(this) in the first setTimeout callback is necessary to explicitly set the value of this to the current instance, while the second setTimeout callback uses an arrow function, which automatically captures the correct this value from the surrounding context.

// const show = () => this;

// console.log("arrow function this", show());

// const person = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: () => this.name + " " + this.surname,
// };

// console.log(person.sayName());

// function btnHandler() {
//   if (this.textContent === "click me") {
//     this.textContent = "clicked";
//     this.style.background = "green";
//   } else {
//     this.textContent = "click me";
//     this.style.background = "red";
//   }
// }

// document.getElementById("testBtn").addEventListener("click", btnHandler);

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };
// const person3 = {
//   name: "Gedeon",
//   surname: "Kakulia",
// };

// console.log(person1.sayName.call(person3)); // Gedeon Kakulia
// console.log(person1.sayName.apply(person3)); // Gedeon Kakulia
// console.log(person1.sayName.bind(person3)()); // Gedeon Kakulia

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function (city, country) {
//     return this.name + " " + this.surname + ", " + city + ", " + country;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };

// console.log(person1.sayName.call(person2, "DF", "Mexico"));

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function (city, country) {
//     return this.name + " " + this.surname + ", " + city + ", " + country;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };

// console.log(person1.sayName.apply(person2, ["DF", "Mexico"]));

// const person = {
//   name: "Gedeon",
//   surname: "Kakulia",
//   sayName: function (city, country) {
//     return this.name + " " + this.surname + ", " + city + ", " + country;
//   },
// };

// const person1 = {
//   name: "Davit",
//   surname: "Kakhidze",
// };

// console.log(person.sayName.bind(person1, "batumi", "georgia")());

// console.log(person.sayName.call(person1, "batumi", "georgia"));

// console.log(person.sayName.apply(person1, ["batumi", "georgia"]));

// How to Use the Bind Method

// Same as call and apply , the bind method indicates the object to which the this keyword will refer when a given method executes.

// But the difference with bind is that it will return a new function, without executing it. While with call and apply the function executed right away, using bind we must execute it separately.

// const person1 = {
//   name: "Pedro",
//   surname: "Sanchez",
//   sayName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// const person2 = {
//   name: "Jimena",
//   surname: "Juarez",
// };

// const sayPerson2Name = person1.sayName.bind(person2);

// console.log(sayPerson2Name());

const person = { name: "John" };
const greet = function () {
  console.log(`Hello, ${this.name}!`);
};
const greetJohn = greet.bind(person);
greetJohn(); // Outputs: Hello, John!

const person1 = { name: "Alice" };
const introduce = function (skill1, skill2) {
  console.log(`${this.name} knows ${skill1} and ${skill2}.`);
};
introduce.apply(person, ["JavaScript", "Python"]);
// Outputs: Alice knows JavaScript and Python.

const car = { brand: "Toyota" };
const describeCar = function (color, year) {
  console.log(`This ${color} car is a ${year} ${this.brand}.`);
};
describeCar.call(car, "blue", 2022);
// Outputs: This blue car is a 2022 Toyota.
