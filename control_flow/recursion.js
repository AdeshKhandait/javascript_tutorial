function sumNum(num) {
  if (num < 0) return 0;
  return num + sumNum(num - 1);
}

// console.log(sumNum(3));

const person = {
  name: "Ansh",
  friend: {
    name: "Amar",
    friend: {
      name: "Poonam",
      friend: {
        name: "Adesh",
      },
    },
  },
};

function printName(person) {
  if (person == null) return;
  console.log(person.name);
  person = printName(person.friend);
}

printName(person);
