// // BOM -> DOM

// console.log(window.screen.height);
// console.log(window.screen.width);
// console.log(window.innerWidth);
// console.log(window.location.href);

// console.log(document.title);
// console.log(document.location.port);

// console.log(screen.width);
// console.log(screen.height);

// var element = document.getElementById("myElement");
// element.textContent = "New content";

// Reachability
// The currently executing function, its local variables and parameters.
// Other functions on the current chain of nested calls, their local variables and parameters.
// Global variables.
// (there are some other, internal ones as well)
// These values are called roots.

// let user = {
//   name: "John",
// };
// user = null;

// let user = {
//   name: "John",
// };
// let admin = user;
// user = null;

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }
// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// delete family.father;
// delete family.mother.husband;

// console.log(family);
// family = null;
// console.log(family);

// Generational collection – objects are split into two sets: “new ones” and “old ones”. In typical code, many objects have a short life span: they appear, do their job and die fast, so it makes sense to track new objects and clear the memory from them if that’s the case. Those that survive for long enough, become “old” and are examined less often.

// Incremental collection – if there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays in the execution. So the engine splits the whole set of existing objects into multiple parts. And then clear these parts one after another. There are many small garbage collections instead of a total one. That requires some extra bookkeeping between them to track changes, but we get many tiny delays instead of a big one.

// Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution
