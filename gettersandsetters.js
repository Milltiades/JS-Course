// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
// };

// console.log(`${person.firstName} ${person.lastName}`);

// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// // getter => access properties
// // setters => change (mutate) them

// person.fullName = "Gedeon Kakulia";
// console.log(person);

// const person = {
//   name: "giga",
//   surname: "kakulia",
//   get fullname() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.name = parts[0];
//     this.surname = parts[1];
//   },
// };
// person.fullName = "lasha kakhidze";

// console.log(person.fullname);

// class Person {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//     this.count = 0;
//   }
//   get fullName() {
//     this.count += 1;
//     return `${this.first} ${this.last}`;
//   }
//   set fullName(value) {
//     if (!value) {
//       throw "BOO BANE CANNOT BE BLANK";
//     }
//     const [first, last] = value.split(" ");

//     this.first = first;
//     this.last = last;
//   }
// }

// const actor = new Person("Brendan", "Fraser");
// // actor.first = "gio";
// actor.fullName = "Giga Kakulia";
// console.log(actor.fullName);
