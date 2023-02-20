// --- Const: variable who's value never change
let a = 1;
const b = 19;

// Not possible
// b = 90;

// ----- Var: great all the variable at global scope break barrier of the scope
//  Its similar to let but outdate nobody is use it

// --- type corresion
let h = 1;
let r = "Hello";
r = "3";

// console.log(parseInt(h) + parseInt(r));

// // == vs ===
// // its general pratice to use check null with ==
// // Always use the === for compartaring expect for null and undefined

// // use: ===
// let kj = 1;
// let df = "1";
// console.log(kj === df);
// // use: ==
// let kl = null;
// let op = undefined;
// console.log(kl == op);

// // Use !== for
// let nmn = 1;
// let sd = "2";
// console.log(sd !== nmn);

// // use != for null and undefined
// let use = 1;
// console.log(use != null);

// ----- NaN: Not a number
let g = "ddsovmon";
console.log(isNaN(g));
