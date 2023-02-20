// array and objects are just bunch of pointer to memory locations
let j = [1, 3, 4];
let k = { name: "adesh" };

let l = j;

l.push(2);

console.log(j);
console.log(l);

console.log(JSON.stringify(k));
