// function setTimeoutPromise(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, delay);
//   });
// }

// // // Using Promise then and catch
// // console.log("Using Promise");
// // setTimeoutPromise(1000)
// //   .then(() => {
// //     console.log("1");
// //     return setTimeoutPromise(1000);
// //   })
// //   .then(() => {
// //     console.log("2");
// //     return setTimeoutPromise(1000);
// //   })
// //   .then(() => {
// //     console.log("3");
// //   });

// // Using asyn
// console.log("Async");
// async function doStuff(delay) {
//   await setTimeoutPromise(delay);
//   console.log("1");
//   await setTimeoutPromise(delay);
//   console.log("2");
//   await setTimeoutPromise(delay);
//   console.log("3");
// }

// doStuff(1000);

// Resolve with parameter
