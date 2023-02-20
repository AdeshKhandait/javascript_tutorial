// Async code is code that run after some condition is meet
// Here time take 2 input one function while run later on given 2 argument time
// setTimeout(() => {
//   console.log("Bye!!!");
// }, 1000);

// console.log("Hi");

// callback basically this perform some action or execute function based on the certain condition
// Complicated call stuf
setTimeout(() => {
  console.log("Inside 1");
  setTimeout(() => {
    console.log("Inside 2");
    setTimeout(() => {
      console.log("Inside 3");
    }, 1000);
  }, 1000);
}, 1000);

// This above code become very difficult read analyse due to this promisese was introducted in JS
