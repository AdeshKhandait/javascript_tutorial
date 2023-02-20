function sayname() {
  console.log("Adesh Khandait");
}

// sayname();

function printName(name) {
  console.log(name);
}

// printName("Adesh");

function returnName(name) {
  return name;
}

// console.log("Hello " + returnName("Adesh"));

//------Parametrised Function
function printName(name) {
  console.log(name);
}

function para_inpt_funtc(name, callback) {
  printName(name);
}

// para_inpt_funtc("Ansh", printName);

// ------- Arrow Function
let prntName = (ipt) => {
  console.log(ipt);
};
printName("Amar");

let sayHi = (nme) => "Hi " + nme;

console.log(sayHi("Ansh"));
