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

const person = {
  name: "giga",
  surname: "kakulia",
  get fullname() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.name = parts[0];
    this.surname = parts[1];
  },
};
person.fullName = "lasha kakhidze";

console.log(person.fullname);
