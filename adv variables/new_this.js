// Create objects

// Method 1: using function

function User(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}

const test = new User("adesh", 23);
// console.log(test);`

// Method 2(Recommended): using class

class Users {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

const test2 = new Users("test_subject_007", 23);
console.log(test2);
