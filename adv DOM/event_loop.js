// Test 1 : async action
function test() {
  console.log("1");
  console.log("2");
  setTimeout(() => {
    console.log("3");
  }, 10);
  setTimeout(() => {
    console.log("4");
  }, 0);
  console.log("5");
}

// result:
// 1
// 2
// 5
// 4
// 3
// when there is async action to js create separate thread and continue to work futher on current
// so we can see 1,2,5
// Once main complete its exectution it start running task queue actions
// now then we see 4 and 5 because separate thread will wait for 10 milisec and action is added to
// task queue where 4 is already there is we see 4 and then 5
// test();

// Test 2: async action with promise
function test2() {
  console.log("1");
  console.log("2");
  setTimeout(() => {
    console.log("4");
  }, 0);
  new Promise((resolve, reject) => {
    resolve("HI Promise");
  }).then((messsage) => {
    console.log(messsage);
  });
  setTimeout(() => {
    console.log("3");
  }, 10);
  console.log("5");
}

// Result:
// 1
// 2
// 5
// HI Promise
// 4
// 3
// when there is async action to perform js create separate thread and continue to work futher on current
// so we can see 1,2,5
// but as we can even thought setTime("4") is above promise still promise is after 5 because promise
// behave differently once current main thread done executing they immeadiatly run if they are ready to execute
// so we see HI Promise
// as then as usual 4,3 is added to Task queue

test2();
