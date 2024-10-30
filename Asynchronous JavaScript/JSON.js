
const getTodos = (resource,callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // Check both that the request is complete and that the status succeed
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch the data", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};


getTodos("todos.json",(err, data) => {
    console.log(data);
});
getTodos("todos2.json",(err, data) => {
  console.log(data);
});
