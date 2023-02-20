function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(`Congrats`), delay);
  });
}

function setTimeoutPromiseError(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(reject(`You got error Well done!!!`), delay);
  });
}

// Using Promise then and catch
// console.log("Using Promise");
// setTimeoutPromise(1000)
//   .then((message) => {
//     console.log(message);
//     return setTimeoutPromise(1000);
//   })
//   .then((message) => {
//     console.log(message);
//     return setTimeoutPromise(1000);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.error(message);
//   });

// Using asyn
console.log("Async");
async function doStuff(delay) {
  try {
    const message = await setTimeoutPromise(delay);
    console.log(message);
    const message2 = await setTimeoutPromise(delay);
    console.log(message2);
    const message3 = await setTimeoutPromiseError(delay);
    console.log(message3);
  } catch (error) {
    console.error(error);
  }
}

doStuff(1000);
