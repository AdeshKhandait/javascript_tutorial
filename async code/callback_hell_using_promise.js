// // console.log("Start of CallBack Hell");

// // setTimeout(() => {
// //   console.log("1");
// //   setTimeout(() => {
// //     console.log("2");
// //     setTimeout(() => {
// //       console.log("3");
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// console.log("Start of Promise");

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration);
//   });
// }

// // Chain Promise to Replicate above code
// setTimeoutPromise(1000)
//   .then(() => {
//     console.log("1");
//     return setTimeoutPromise(1000);
//   })
//   .then(() => {
//     console.log("2");
//     return setTimeoutPromise(1000);
//   })
//   .then(() => {
//     console.log("3");
//   });

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
console.log("Promise");

setTimeoutPromise(1000)
  .then(() => {
    console.log("1");
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log("2");
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log("3");
  });
