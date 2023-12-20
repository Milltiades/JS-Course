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

class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}
class Rectangle {
  constructor() {
    this.name = "Rectangle";
  }
}
class Square extends Polygon {
  constructor() {
    super();
  }
}
Object.setPrototypeOf(Square, Rectangle);

const newInstance = new Square();

console.log(newInstance instanceof Polygon); //true
console.log(newInstance instanceof Rectangle); //false

console.log(newInstance.name); //Rectangle
