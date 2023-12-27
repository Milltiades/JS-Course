// const url = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    let response = await fetch(url);
    console.log(response);
    if (!response.ok) throw new Error("not a valid response");
    let dataObj = await response.json();
    console.log(dataObj);
  } catch (err) {
    console.warn(err.message);
  }
}

getData();
