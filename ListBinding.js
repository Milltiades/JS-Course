// class ListBinding {
//   constructor(element) {
//     this.listElement = element;
//     this.textList = [];
//   }

//   /* Makes an <li>text</li> element/tag */
//   static createListItem(text) {
//     const li = document.createElement("li");
//     li.textContent = text;
//     return li;
//   }
//   update() {
//     /* Remove all existing <l1> elements/tags */
//     while (this.listElement.firstChild) {
//       this.listElement.removeChild(this.listElement.firstChild);
//     }

//     /* Fill <ul>/<ol> tag with <li> */
//     for (const text of this.textList) {
//       this.listElement.appendChild(ListBinding.createListItem(text));
//     }
//   }

//   add(text) {
//     this.textList.push(text);
//     this.update();
//   }
//   remove(index) {
//     this.textList.splice(index, 1);
//     this.update();
//   }
// }

// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setToppings(toppings) {
//     this.toppings.push(toppings);
//   }
//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
//     );
//   }
// }

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// console.log(myPizza.getToppings());
// console.log(myPizza.getCrust());

// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
// }

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }
// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

//Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => {
//       console.log(`Baking a ${size} ${crust} crust pizza.`);
//     },
//   };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();

// class Pizza {
//   crust = "original";
//   #sauce = "traditional";
//   #size;
//   constructor(pizzaSize) {
//     this.#size = pizzaSize;
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   hereYouGo() {
//     console.log(
//       `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
//     );
//   }
// }
// const myPizza = new Pizza("large");
// myPizza.hereYouGo();

// console.log(myPizza.crust);

// //Abstraction
// class Auth {
//   constructor() {}

//   #validate() {
//     // Private method
//   }

//   #sendOnboardingEmail() {
//     // Private method
//   }

//   // Public method that calls private methods
//   signUp() {
//     this.#validate();
//     // Execute signUp functionality
//     this.#sendOnboardingEmail();
//   }
// }

// const auth = new Auth();

// // Calls the public method, which, in turn, calls private methods
// auth.signUp();

// Encapsulation

// function createCounter() {
//   let count = 0; // This variable is encapsulated within the closure.

//   function increment() {
//     count++; // The inner function can access the 'count' variable.
//     console.log(count);
//   }

//   return increment; // Return the inner function (closure).
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(
//       `Hello, my name is ${this.name}, and I am ${this.age} years old.`
//     );
//   }
// }

// // Create a derived class Student that inherits from Person
// class Student extends Person {
//   constructor(name, age, studentId) {
//     super(name, age); // Call the parent class constructor using super
//     this.studentId = studentId;
//   }

//   study(subject) {
//     console.log(
//       `${this.name} with student ID ${this.studentId} is studying ${subject}.`
//     );
//   }
// }

// // Create instances of Person and Student
// const person1 = new Person("Alice", 30);

// const student1 = new Student("Bob", 25, "12345");

// // Use the inherited methods
// person1.sayHello();

// student1.sayHello();

// student1.study("Math");

// polymorphism

// class Transport {
//   constructor() {}
//   drive() {
//     console.log("Driving...");
//   }
//   fly() {
//     console.log("Flying...");
//   }
// }
// // Create a derived class Car that inherits from Transport
// class Car extends Transport {
//   constructor() {
//     super();
//   }
//   // Overrides it's base implementation
//   fly() {
//     console.log("I am a car, I cannot fly");
//   }
// }
// const audi = new Car();
// audi.fly();
