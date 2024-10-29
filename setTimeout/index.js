// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

var para = document.getElementById("para");
function sayHello() {
  para.innerHTML += "Hello<br>";
}

setTimeout(sayHello, 3000);

setTimeout(function () {
  para.innerHTML += "second Hello<br>";
}, 4000);

setTimeout(() => 
  para.innerHTML += "third Hello<br>"
, 5000);

// clearTimeout() = can cancel a timeout before it triggers

const setTimeoutID = setTimeout(() =>
    para.innerHTML += "cancelled Hello<br>", 3500);

clearTimeout(setTimeoutID);

let triggeredTimerID
function startTimer() {
    triggeredTimerID = setTimeout(() =>
        para.innerHTML += "triggered Hello<br>"
    , 1000);
    console.log("started");
}
function clearTimer() {
    clearTimeout(triggeredTimerID);
    console.log("cleared");
}

para.innerHTML += "First Hi<br>";
