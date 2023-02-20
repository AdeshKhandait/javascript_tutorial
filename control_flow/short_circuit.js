// It javascript if know the what will end result it no longer check futher condition
// example
// As we used true at first anyway ans will true so it will not check futher
// console.log(true || false);

// example
// if person does not exist will not check futher
let person = {
  addr: {
    pin: {
      num: 4546,
    },
  },
};

// person = {};

console.log(person && person.addr && person.addr.pin && person.addr.pin.num);
