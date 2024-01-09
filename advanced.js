// console.log("advanced");

// Cross-Site Scripting (XSS) is a type of security vulnerability that occurs when an attacker injects malicious scripts into web pages that are then viewed by other users. This can happen when a web application does not properly validate or sanitize user inputs before rendering them on a webpage.

// Stored XSS (Persistent XSS):

// In a stored XSS attack, the malicious script is permanently stored on the target server, such as in a database. When a user requests a particular page, the server retrieves the stored script and includes it in the response, which is then executed by the victim's browser.
// An example scenario could be an attacker injecting a malicious script into a comment on a blog. When other users view that blog post and its comments, the script gets executed in their browsers.

// Reflected XSS:

// In a reflected XSS attack, the malicious script is embedded in a URL and is not stored on the target server. The script is typically included in a link, email, or other means of enticing the victim to click on the manipulated URL.
// When the victim clicks on the manipulated URL, the script is reflected off the web server and executed in the victim's browser. This type of XSS attack is often used in phishing attempts.

// DOM-based XSS:

// DOM-based XSS occurs when the client-side script manipulates the Document Object Model (DOM) of a web page, resulting in the execution of malicious code. Unlike stored and reflected XSS, the payload is not sent to the server; instead, it is processed on the client side.
// This type of XSS attack is particularly challenging to detect and prevent because it involves the manipulation of the DOM, and traditional server-side security mechanisms may not be effective.

// LocalStorage:

//     Web storage can be viewed simplistically as an improvement on cookies, providing much greater storage capacity. Available size is 5MB which considerably more space to work with than a typical 4KB cookie.

//     The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - reducing the amount of traffic between client and server.

//     The data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

//     It works on same-origin policy. So, data stored will only be available on the same origin.

// Cookies:

//     We can set the expiration time for each cookie

//     The 4K limit is for the entire cookie, including name, value, expiry date etc. To support most browsers, keep the name under 4000 bytes, and the overall cookie size under 4093 bytes.

//     The data is sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - increasing the amount of traffic between client and server.

// sessionStorage:

//     It is similar to localStorage.

//     Changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted The data is available only inside the window/tab in which it was set.

//     The data is not persistent i.e. it will be lost once the window/tab is closed. Like localStorage, it works on same-origin policy. So, data stored will only be available on the same origin.

// localStorage.setItem("name", "Giga");
// // localStorage.removeItem("name");
// // console.log(localStorage.getItem("name"));

// sessionStorage.setItem("name", "Lasha");
// sessionStorage.setItem("name", "Giga");

// // sessionStorage.removeItem("name");
// console.log(sessionStorage.getItem("name"));

// document.cookie = "name=Gedeon; expires=" + new Date(9999, 0, 15).toUTCString();

// document.cookie =
//   "lastName=Smith; expires=" + new Date(2024, 1, 1).toUTCString();
// document.cookie = "age=27";

// console.log(document.cookie);

// console.log("sss");
// localStorage.setItem("lunch", "cereal");
// console.log(localStorage.getItem("breakfast"));

// sessionStorage.setItem("dinner", "eggs");
// console.log(sessionStorage.getItem("breakfast"));

// localStorage.removeItem("dinner");
// localStorage.clear();

// document.cookie = "hello=; expires= Thu, 01 Jan 1970 00:00:00 UTC";
// document.cookie = "doSomethingOnlyOnce=; expires=Fri, 31 Dec 1970 23:59:59 GMT";

// document.cookie =
//   "person=; path=/; expires=" + new Date(1970, 5, 5).toUTCString();

// console.log(document.cookie);

// document.cookie = "doSomethingOnlyOnce=; expires=Fri, 31 Dec 1970 23:59:59 GMT";
// document.cookie = "doSomethingOnlyOnce=; expires=Fri, 31 Dec 1970 23:59:59 GMT";
// document.cookie =
//   "doSomethingOnlyTwice=; expires=Fri, 31 Dec 1970 23:59:59 GMT";

// function* simpleGenerator() {
//   console.log("before 1");
//   yield 1;
//   console.log("after 1");
//   console.log("before 2");
//   yield 2;
//   console.log("after 2");
//   console.log("before 3");
//   yield 3;
//   console.log("after 3");
// }
// const generateObject = simpleGenerator();
// const generateObject2 = simpleGenerator();
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject2.next());
// console.log(generateObject2.next());

// function* generateId() {
//   let id = 1;

//   while (true) {
//     yield id;
//     id++;
//   }
// }
// const generateObject = generateId();
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());
// const generateObject2 = generateId();
// console.log(generateObject2.next());

// function* generator(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i];
//   }
// }
// const generateObject = generator([1, 3, 5]);
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.next());

function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generateObject = generateId();
// console.log(generateObject.next());
// console.log(generateObject.next());
// console.log(generateObject.return(8));
// console.log(generateObject.next());

console.log(generateObject.next());
console.log(generateObject.next());
console.log(generateObject.throw(new Error("Hi")));
console.log(generateObject.next());
