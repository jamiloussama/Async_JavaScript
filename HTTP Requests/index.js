
// HTTP Requests

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    console.log(request,request.readyState);

    // Check both that the request is complete and that the status succeed
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    }
    else if (request.readyState === 4){
        console.log("could not fetch the data");
    }
})

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();