
const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // Check both that the request is complete and that the status succeed
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
  request.send();
};

console.log(1);
getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log(2);
