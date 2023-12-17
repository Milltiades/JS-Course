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

function talk() {
  return `I am ${this.name}`;
}
const me = {
  name: "Giga",
};
const meTalk = talk.bind(me);
console.log(meTalk());
