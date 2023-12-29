const url = "https://jsonplaceholder.typicode.com/users/";

// const btn = document.getElementById("btn");
// btn.addEventListener("click", getData);

// const getRequest = () => {
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Invalid response status");
//       }
//       return res.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.warn(err.message));
// };

// getRequest();

// async function getRequest() {
//   try {
//     let res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("Invalid response status!");
//     }
//     console.log(res);
//     let data = res.json();
//     console.log(data);
//   } catch {
//     console.warn(err.message);
//   }
// }

// getRequest();

// function getData() {
//   // What is an API key
//   // Where can we pass it to the server - querystring, headers, cookies
//   // Controlling when cookies and credentials are passed to a server
//   // CSP meta tags and headers

//   let str = "http://127.0.0.1:3000/?name=value&steve=griffith";
//   let url = new URL(str); // url.search
//   let sp = url.searchParams;
//   sp.append("hello", "world");
//   sp.append("api-key", "jhsafsahgfaasjfkhakjfaf");
//   //   document.cookie('')

//   let h = new Headers();
//   //   h.append("content-type", "application/json");
//   //   h.append("origin", "https://cia.org");
//   h.append("x-api-key", "jhsafsahgfaasjfkhakjfaf"); // API key
//   h.append("Authorization", "Bearer jhsafsahgfaasjfkhakjfaf"); //JWT
//   //Forbidden Header Names

//   let request = new Request(url, {
//     method: "GET",
//     headers: h,
//     cache: "default",
//     credentials: "same-origin",
//   });

//   fetch(request)
//     .then((response) => {
//       if (!response.ok) throw new Error("Invalid");
//       return response.text();
//     })
//     .then((txt) => console.log(txt))
//     .catch(console.warn);
// }

// getData();

// how to upload one or more files from the browser to a server
// formData objects
// HTTP Methods POST, Patch, PUT

let endpoint = "http://127.0.0.1:3000/";

function setData() {
  //
  const imgInput = document.getElementById("imgFile");
  const jsonInput = document.getElementById("jsonfile");
  document.getElementById("myform").addEventListener("submit", (ev) => {
    ev.preventDefault();
    // upload something
  });
}

setData();
