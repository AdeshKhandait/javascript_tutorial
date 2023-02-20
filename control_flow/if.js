// "false: "", 0, null,undefined
// true: any value

const test = [];
const len = test.length;
console.log(len);

if (len === 0) {
  console.log("Empty");
} else if (len <= 5) {
  console.log("Small");
} else if (len <= 10) {
  console.log("medium");
} else {
  console.log("large");
}
