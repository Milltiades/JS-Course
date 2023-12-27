// const str = "http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello";
const str = "https://jsonplaceholder.typicode.com/users";

function getData() {
  const url = new URL(str);

  //   console.log(url.host, url.origin, url.protocol, url.pathname);

  const request = new Request(url, {
    headers: { "x-steve": "hello" },
    method: "GET",
    cache: "no-store",
  });

  fetch(request)
    .then((response) => {
      console.log(response.status);
      if (!response.ok) throw new Error("Invalid");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.warn(err.message);
    });
}

getData();
