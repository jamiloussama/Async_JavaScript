// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

// define a arrow function to make it reusable

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

// output 1 , 2 , callback fired , err/data

/*
In your code, the getTodos function appears asynchronous because it makes use of the XMLHttpRequest API, which is itself asynchronous by nature.

Here’s why it works asynchronously:

Asynchronous Nature of XMLHttpRequest: The XMLHttpRequest object sends HTTP requests in a non-blocking way. When you call request.send(), the browser immediately begins the process of fetching the data, but it doesn’t wait for the response before moving on to the next line of code. This allows the rest of your code to execute while waiting for the network request to complete.

Event Listener for readystatechange: The request.addEventListener("readystatechange", () => {...}) part sets up a callback function that only runs when certain conditions are met (like request.readyState === 4 for completion). This callback function will fire asynchronously once the server response is received, allowing other synchronous code to execute in the meantime.

Order of Execution: In your code:

javascript
Copier le code
console.log(1);
getTodos( (err,data) =>{
    console.log("callback fired");
    if (err) {
        console.log(err);       
    }
    else{
        console.log(data);
    }
});
console.log(2);
First, console.log(1); is executed.
Then, getTodos is called, which initiates an asynchronous XMLHttpRequest.
Immediately after starting the request, console.log(2); is executed.
Later, when the HTTP request completes, the callback within getTodos is fired, printing "callback fired" and either an error or the fetched data.
Why This Happens
Since XMLHttpRequest uses a separate process to handle the request, it allows the main code to continue running without waiting. This is why you see the output in this order:

plaintext
Copier le code
1
2
callback fired
could not fetch the data (or data if request succeeds)
This asynchronous behavior enables JavaScript to handle I/O operations without blocking other code execution, making it possible to create smooth, non-blocking applications.
*/
