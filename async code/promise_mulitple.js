// All: Here resolve will run only when all promise is successfull

//
// Promise.all([Promise.resolve("1"), Promise.reject("Error 1")])
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// Any: Here Resolve will run when at least one is successfull
// Promise.any([Promise.resolve("Error 2"), Promise.reject("Error 1")])
//   .then((message) => {
//     console.log("Resolve:");
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log("Reject:");
//     console.log(message);
//   });

// Race: Here it does matter whether promise is success or failure it return which is first
// Promise.race([Promise.reject("Error 2"), Promise.reject("Error 1")])
//   .then((message) => {
//     console.log("Resolve:");
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log("Reject:");
//     console.log(message);
//   });

// AllSettled: it will return object will contain info of each promise
//              Resolve will not run unless all the promise is executed no matter it successfull or failure
// Promise.allSettled([Promise.reject("Error 2"), Promise.reject("Error 1")])
//   .then((message) => {
//     console.log("Resolve:");
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log("Reject:");
//     console.log(message);
//   });

// Finally: Not matter what happen finally will inside iy

const promise = Promise.resolve("here");

promise
  .then((message) => {
    console.log("Resolve:");
    console.log(message);
  })
  .catch((message) => {
    console.log("Catch:");
    console.error(message);
  })
  .finally(() => {
    console.log("Finally");
  });
