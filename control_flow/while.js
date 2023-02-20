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

let currPerson = person;
while (currPerson) {
  if (currPerson.name === "Poonam") break;
  console.log(currPerson.name);
  currPerson = currPerson.friend;
}
