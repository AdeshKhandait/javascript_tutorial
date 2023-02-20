const a = [1, 2, 3, 4, 5, 6];

// forEach: It grab each element one by one
a.forEach((num, index) => {
  console.log(index + ":" + num);
});

// Map: Its grab all elements and do given operation on array and return completely different array

const g = a.map((num) => {
  return num * 3;
});
console.log(g);

// Filter: Its grab all element one by one and perform filter on array and return new array

const j = a.filter((num) => {
  return num > 2;
});
console.log(j);

// Find: it goes to entire array until we find element matching condition

const k = a.find((num) => {
  return num > 2;
});
console.log(k);

// Some: return true at least one element in array matching consition

const y = a.some((num) => {
  return num > 3;
});
console.log(y);

// Every : return boolean if all element in array matching condition
const q = a.every((num) => {
  return num > 2;
});

console.log(q);

// reduce: it take atleast two arguments and one the function or operation to reduce at array and another is start value of accumlator

const gh = a.reduce((accum, num) => {
  return accum + num;
}, 1);

console.log(gh);

const temp = [
  { price: 0 },
  { price: 1 },
  { price: 2 },
  { price: 3 },
  { price: 4 },
];

const jk = temp.reduce((accum, num) => {
  return accum + num.price;
}, 1);

console.log(jk);

// Include: It return boolean value check whether given element in array
const isTrue = a.includes(90);
console.log(isTrue);
