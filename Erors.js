// // division calculation
// function divide(v1, v2, dp) {
//   return (v1 / v2).toFixed(dp);
// }

// // show result of division
// function showResult() {
//   result.value = divide(
//     parseFloat(num1.value),
//     parseFloat(num2.value),
//     parseFloat(dp.value)
//   );
// }

// showResult();

// // division calculation
// function divide(v1, v2, dp) {
//   try {
//     return (v1 / v2).toFixed(dp);
//   } catch (e) {
//     console.log(`
//         error name   : ${e.name}
//         error message: ${e.message}
//       `);
//     return "ERROR";
//   }
// }

// divide();

// function divide(v1, v2, dp) {
//   try {
//     return (v1 / v2).toFixed(dp);
//   } catch (e) {
//     return "ERROR";
//   } finally {
//     console.log("done");
//   }
// }

// divide(20, 4, 5);

// show result of division
// function showResult() {
//   try {
//     result.value = divide(
//       parseFloat(num1.value),
//       parseFloat(num2.value),
//       parseFloat(dp.value)
//     );
//   } catch (e) {
//     result.value = "FAIL!";
//   }
// }
// showResult();

// SyntaxError

// An error thrown by syntactically invalid code such as a missing bracket

// if condition) { // SyntaxError
//     console.log('condition is true');
//   }

// ReferenceError
// An error thrown when accessing a non-existent variable:
// function inc() {
//   value++; // ReferenceError
// }
// inc();

// TypeError
// An error thrown when a value isn’t of an expected type, such as calling a non-existent object method:
// const obj = {};
// obj.missingMethod(); // TypeError

// RangeError
// An error thrown when a value isn’t in the set or range of allowed values. The toFixed() method used above generates this error, because it expects a value typically between 0 and 100:

// URIError

// An error thrown by URI-handling functions such as encodeURI() and decodeURI() when they encounter malformed URIs:

// const u = decodeURIComponent('%'); // URIError

// const x = 5;

// eval("console.logg x;");

// function foo() {
//   try {
//     eval("console.logg x;");
//   } catch (error) {
//     console.error(error); // Outputs: SyntaxError: Unexpected identifier
//   }
// }
// foo();

// AggregateError
// An error thrown when several errors are wrapped in a single error. This is typically raised when calling an operation such as Promise.all(), which returns results from any number of promises.

// const foo = async () => {
//   try {
//     // Simulate asynchronous operations that might throw errors
//     await Promise.all([
//       Promise.reject(new Error("Error 1")),
//       Promise.reject(new TypeError("Error 2")),
//       Promise.reject(new RangeError("Error 3")),
//     ]);
//   } catch (error) {
//     if (error instanceof AggregateError) {
//       console.error("Multiple errors occurred:");
//       for (const err of error.errors) {
//         console.error(err.message);
//       }
//     } else {
//       console.error("An error occurred:", error.message);
//     }
//   }
// };

// foo();

// InternalError

// A non-standard (Firefox only) error thrown when an error occurs internally in the JavaScript engine. It’s typically the result of something taking too much memory, such as a large array or “too much recursion”.

// function throwError() {
//   throw new InternalError("This is an internal error.");
// }

// try {
//   throwError();
// } catch (error) {
//   console.error("Caught an error:", error.message);
// }

// Error
// throw "A simple error string";
// throw 42;
// throw true;
// throw { message: "An error", name: "MyError" };

// throw new Error('An error has occurred');

// We can also use Error like a function without new. It returns an Error object identical to that above:

// throw Error('An error has occurred');

// throw new Error("შეცდომააა");

// throw new RangeError("Decimal places must be 0 or greater");

// function foo() {
//   try {
//     if (!true) {
//       console.log("rame");
//     }
//   } catch {
//     throw new Error("aqana eroria bijo");
//   }
// }

// foo();

// division calculation
// function divide(v1, v2, dp) {
//   if (isNaN(dp) || dp < 0 || dp > 8) {
//     throw new RangeError("Decimal places must be between 0 and 8");
//   }

//   return (v1 / v2).toFixed(dp);
// }

// divide(13, 22, 1);

// new DivByZeroError Error type
// class DivByZeroError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "DivByZeroError";
//   }
// }

// if (isNaN(v2) || !v2) {
//   throw new DivByZeroError("Divisor must be a non-zero number");
// }

// show result of division

// function showResult() {
//   try {
//     result.value = divide(
//       parseFloat(num1.value),
//       parseFloat(num2.value),
//       parseFloat(dp.value)
//     );
//     errmsg.textContent = "";
//   } catch (e) {
//     result.value = "ERROR";
//     errmsg.textContent = e.message;
//     console.log(e.name);
//   }
// }

// showResult();

// division calculation
// function divide(v1, v2, dp) {
//   if (isNaN(v1)) {
//     throw new TypeError("Dividend must be a number");
//   }

//   if (isNaN(v2) || !v2) {
//     throw new DivByZeroError("Divisor must be a non-zero number");
//   }

//   if (isNaN(dp) || dp < 0 || dp > 8) {
//     throw new RangeError("Decimal places must be between 0 and 8");
//   }

//   return (v1 / v2).toFixed(dp);
// }

// divide("fg", -1, 12);

// function asyncError(delay = 1000) {
//   setTimeout(() => {
//     throw new Error("I am never caught!");
//   }, delay);
// }

// try {
//   asyncError();
// } catch (e) {
//   console.error("This will never run");
// }

// // asyncError();

// function asyncError(delay = 1000, callback) {
//   setTimeout(() => {
//     callback("This is an error message");
//   }, delay);
// }

// asyncError(1000, (e) => {
//   if (e) {
//     throw new Error(`error: ${e}`);
//   }
// });

// function wait(delay = 1000) {
//   return new Promise((resolve, reject) => {
//     if (isNaN(delay) || delay < 0) {
//       reject(new TypeError("Invalid delay"));
//     } else {
//       setTimeout(() => {
//         resolve(`waited ${delay} ms`);
//       }, delay);
//     }
//   });
// }

// // invalid delay value passed
// wait("INVALID")
//   .then((res) => console.log(res))
//   .catch((e) => console.error(e.message))
//   .finally(() => console.log("complete"));

// try {
//   throw new Error("I am an error!");
// } catch (e) {
//   console.log(`error ${e.message}`);
// }
