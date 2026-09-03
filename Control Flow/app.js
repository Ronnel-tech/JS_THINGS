// const form = document.getElementById("moneyForm");
// const moneyInput = document.getElementById("moneyInput");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Stops page reload

//   const money = parseInt(moneyInput.value);

//   if (isNaN(money)) {
//     alert("Invalid input. Please enter a number.");
//   } else if (money < 0) {
//     alert("Please enter a positive number.");
//   } else if (money >= 1 && money <= 100) {
//     alert("You have enough money to buy the item!");
//   } else {
//     alert("You do not have enough money to buy the item.");
//   }
// });

// const form = document.getElementById("timeForm");
// const timeInput = document.getElementById("timeInput");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Stops page reload

//   const time = parseInt(timeInput.value);

//   if (isNaN(time)) {
//     alert("Please input a valid number");
//   } else if (time >= 1 && time < 12) {
//     alert("Good morning");
//   } else if (time >= 12 && time <= 17) {
//     alert("Good afternoon");
//   } else if (time >= 18 && time <= 24) {
//     alert("Good evening");
//   } else {
//     alert("Please enter a valid time");
//   }
// });

// let password = "Ronnel";

// if (password.length === 8) {
//   alert("Welcome");
// } else if (password.length < 8) {
//   alert("Password must be at least 8 characters long");
// } else if (password.length > 8) {
//   alert("Password must be no more than 8 characters long");
// } else {
//   alert("Invalid password");
// }

// const form = document.getElementById("timeForm");
// const timeInput = document.getElementById("timeInput");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Stops page reload

//   const fruit = timeInput.value;

//   switch (fruit) {
//     case "Banana":
//       alert("banan is good");
//       break;
//     case "Apple":
//       alert("apple is good");
//       break;
//     default:
//       alert("I don't know that fruit");
//   }
// });

// for (i = 1; i <= 10; i++) {
//   console.log("Ronnel " + i);
// }
// let password = "Ronnel";

// if (password.length === 6 && password.includes("onn")) {
//   alert("Valid password, Welcome");
// } else {
//   alert("puking ina mo");
// }

// let isTruee = true;
// let isFalsee = !isTruee;

// let bol;

// function bold(x, y) {
//   return isTruee && isFalsee;
// }

// console.log(bold(isFalsee, isTruee));

// let name = [];

// name.append("Ronnel");

// console.log(name[0]);

// let name = ["Ronnel", "Kaye", "Monkey", "Andre"];
// let age = [21, 20, 24, 21];

// name.push("Gerbs");
// name.unshift("Naruto");
// console.log(name.sort());

// const form = document.getElementById("nameForm");
// const nameInput = document.getElementById("nameInput");

// const names = [];

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   names.unshift(nameInput.value);

//   console.log(names);
// });

// const person = {
//   firstname: "Ronnel",
//   lastname: "Gerbs",
//   age: 21,
//   city: "Cebu",
// };

// console.log(person.firstname);

// console.log(typeof person);

// const car = {
//   type: "Tesla",
//   model: "Model S",
//   color: "Red",
// };

// console.log(typeof car);
// car.type = "Toyota";
// car.wheels = "value";

// console.log(car);

// a = 5;
// b = 10;

// function add(x, y) {
//   return x + y;
// }

// // console.log(add(a, b));

// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Ronnel"));

// console.log(myName("Ronnel"));

// const myName = function (name) {
//   return "Hello, " + name + "!";
// };

// let result = mulltiply(5, 10);
// console.log(result);

// function multiply(x, y) {
//   return x * y;
// }

// let result1 = multiply(5, 20);

// function result() {
//   console.log(result1);
// }

// result();

// Callback function

// function name(callback) {
//     const name = "Ronnel";
//     callback(name);
// };

// name(function (name)
// {
//     console.log("Hello, " + name + "!");
// }

// );

// function name(x) {
//   return x;
// }

// function greet(name) {
//   console.log("Hello" + " " + name + "!");
// }

// greet(name("Shabs"));

// function getName(name, callback) {
//   callback(name);
// }

// function callback() {
//   console.log("Hello");
// }

// getName();

// function getname(name, callback) {
//     return name;
//     callback();
// };

// function greet(function(getname){
//     console.log("Hello");
// });

// function geoFindMe() {
//   const status = document.querySelector("#status");
//   const mapLink = document.querySelector("#map-link");

//   mapLink.href = "";
//   mapLink.textContent = "";

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = "Unable to retrieve your location";
//   }
//   ``;
//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }

// document.querySelector("#find-me").addEventListener("click", geoFindMe);

// function add(a, b) {
//   result = a + b;
//   return result;
// }

// function print_result(x) {
//   return console.log("The result is: " + x);
// }

// print_result(add(5, 10));

// class numbers {
//   constructor(first_number, second_number) {
//     this.first_number = first_number;
//     this.second_number = second_number;
//   }
//   add() {
//     return this.first_number + this.second_number;
//   }
//   subtract() {
//     return this.first_number - this.second_number;
//   }
//   print(x) {
//     return console.log(`The result is: ${x}`);
//   }
// }

// const numbers1 = new numbers(5, 23);
// cons;
// result = numbers1.add();
// result1 = numbers1.subtract();

// numbers1.print(result);
// numbers1.print(result1);

// class Person {
//   constructor(name, age, address, sex) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.sex = sex;
//   }
//   greet() {
//     return console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old. I live in ${this.address} and I am a ${this.sex}.`,
//     );
//   }
// }

// class Student extends Person {
//   constructor(name, age, address, sex, studentID, section) {
//     super(name, age, address, sex);
//     this.studentID = studentID;
//     this.section = section;
//   }
//   student_info() {
//     return console.log(
//       `My student ID is ${this.studentID} and I am in section ${this.section}.`,
//     );
//   }
// }

// // const person = new Person("Ronnel", 21, "Oriental Mindoro", "Male");
// // person.greet();

// const student = new Student(
//   "Ronnel",
//   21,
//   "Oriental Mindoro",
//   "Male",
//   1111,
//   "3-F3",
// );

// student.student_info();
// student.greet();z

// class bankAccount {
//   constructor(accountBalance) {
//     this.accountBalance = accountBalance;
//   }
//   showBalance() {
//     return `Your account balance is: ${this.accountBalance}`;
//   }
// }

// const account = new bankAccount(1000);
// account.accountBalance(999);

// console.log(account.showBalance());

// const user = [
//   { name: "Alice", email: "alice@gmail.com" },
//   { name: "John", email: "john@gmail.com" },
//   { name: "Ron", email: "ron@gmail.com" },
// ];

// function sendWelcomeEmail(email) {
//   console.log(`Hello and welcome ${email}`);
// }

// user.forEach((user) => {
//   sendWelcomeEmail(user.email);
// });

// let message = "";

// if(ExerciseTime < 5) {
//   message = "You haven't exercised enough today.";
// } else {
//   message = "You've exercised enough today.";
// }

// console.log(message);

// const ExerciseTime = 21;

// const message =
//   ExerciseTime < 5
//     ? "You enjoyed your rest day."
//     : ExerciseTime >= 5 && ExerciseTime <= 20
//       ? "You did good today."
//       : "You exercised enough today.";
// console.log(message);

const guess = 5;
const correctNumber = 5;

// const result =
//   guess === correctNumber ? "Correct guess!" : "Incorrect guess. Try again";
// console.log(result);

// Ternary Operaiton
// const result =
//   guess < correctNumber
//     ? "Too Low!"
//     : guess > correctNumber
//       ? "Too High!"
//       : "Correct Answer!";

// console.log(result);

// const result =
//   guess < correctNumber
//     ? "Too Low!"
//     : guess > correctNumber
//       ? "Too High!"
//       : "Correct Answer!";

// console.log(result);

// function showCallfunc(fn) {
//   const value = 10;
//   fn(value);
// }

// showCallfunc(function (value) {
//   console.log(value);
// });

// function Greet(name, fn) {
//   greeting = "Hello " + name;
//   fn(greeting);
// }

// Greet("Ronnel", function (greeting) {
//   console.log(greeting);
// });

// name, age, address

// function personalDetails(name, age, address) {
//   console.log(
//     `Hello ${name}, you are ${age} years old, and you live in ${address}`,
//   );
//   name();
//   age();
//   address();
// }

// function name(x) {
//   return x;
// }

// function age(x) {
//   return x;
// }

// function address(x) {
//   return x;
// }

// personalDetails("Ronnel", 21, "Masipit");

// function showCallfunc(cb) {
//   const value = 10;
//   cb(value);
// }

// showCallfunc(function (value) {
//   console.log(value);
// });

// console.log("1: Start");
// setTimeout(() => console.log("2: Timeout"), 0);
// Promise.resolve().then(() => console.log("3: Promise"));
// console.log("4: End");

// ______________________________________________________________________________________________

document.getElementById("myBtn1").addEventListener("click", function () {
  alert("Button Clicked");
});

document.getElementById("myBtn2").addEventListener("mouseover", function () {
  console.log("Mouse is over me!");
});

document.getElementById("myBtn3").addEventListener("dblclick", function () {
  alert("Double Clicked!");
});

document.getElementById("helloEvent").addEventListener("click", function () {
  console.log("Custom helloEvent Trigger");
});

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
  "click",
  function () {
    console.log("Parent clicked - CAPTURING");
  },
  { capture: true },
);

child.addEventListener(
  "click",
  function () {
    console.log("Child clicked - BUBBLING");
  },
  { capture: false },
);

// When the child button is clicked:

// 1. The event travels DOWN from the parent to the child.
//    This is the CAPTURING phase.

//    Parent clicked - CAPTURING

// 2. The child event runs.

//    Child clicked - BUBBLING

// The capturing listener runs first because capturing
// happens before the event reaches the target.

// If the parent also had a normal (bubbling) listener,
// it would run after the child.

// ______________________________________________________________________________________________

// function getUser(id, callback) {
//   setTimeout(() => callback({ id, name: "Maria" }), 400);
// }

// function getOrders(userId, callback) {
//   setTimeout(() => callback([{ id: 101, userId }]), 400);
// }

// function getShippingStatus(orderId, callback) {
//   setTimeout(() => callback("Delivered"), 400);
// }

// function getDeliveryDate(orderId, callback) {}

// getUser(1, (user) => {
//   console.log("User:", user.name);

//   getOrders(user.id, (orders) => {
//     console.log("First order ID:", orders[0].id);

//     getShippingStatus(orders[0].id, (status) => {
//       console.log("Shipping status:", status);
//       app.innerHTML = `
//         <p><strong>User:</strong> ${user.name}</p>
//         <p><strong>Order ID:</strong> ${orders[0].id}</p>
//         <p><strong>Status:</strong> ${status}</p>
//       `;
//     });
//   });
// });

// _______________________________________________________________________________________________

const myName = "Antaran, Ronnel L.";

(async function main() {
  function waitWithCallback(ms, message, callback) {
    setTimeout(() => callback(message), ms);
  }

  function waitWithPromise(ms, message) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(message), ms);
    });
  }

  async function waitWithAsyncAwait(ms, message) {
    const msg = await waitWithPromise(ms, message);
    console.log(msg);
  }

  function fakeApi(name, ms) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`${name} success`), ms);
    });
  }

  function fakeFetch({ signal, ms = 2500 }) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        resolve({ message: "Loaded successfully" });
      }, ms);

      signal.addEventListener("abort", () => {
        clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      });
    });
  }

  async function runAbortDemo(abortDelay) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), abortDelay);

    try {
      const result = await fakeFetch({ signal: controller.signal, ms: 2500 });
      console.log(`Abort demo (${abortDelay}ms): completed`);
      return `completed: ${result.message}`;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log(`Abort demo (${abortDelay}ms): cancelled`);
        return "cancelled";
      }
      throw error;
    }
  }

  waitWithCallback(600, "Callback: done waiting", (msg) => console.log(msg));
  waitWithPromise(700, "Promise: done waiting").then((msg) => console.log(msg));
  await waitWithAsyncAwait(800, "Async/Await: done waiting");

  const apiResults = await Promise.all([
    fakeApi("API A", 1000),
    fakeApi("API B", 1400),
    fakeApi("API C", 900),
  ]);
  console.log("Promise.all results:", apiResults);

  // Predicted output order:
  // sync start -> sync end -> microtasks -> macrotasks
  console.log("EventLoop: sync start");
  setTimeout(() => console.log("EventLoop: macrotask 1"), 0);
  Promise.resolve().then(() => console.log("EventLoop: microtask 1"));
  Promise.resolve().then(() => console.log("EventLoop: microtask 2"));
  setTimeout(() => console.log("EventLoop: macrotask 2"), 0);
  console.log("EventLoop: sync end");

  const [cancelCase, successCase] = await Promise.all([
    runAbortDemo(1000),
    runAbortDemo(4000),
  ]);

  app.innerHTML = `
    <h3>Async Patterns Demo</h3>
    <p><strong>Abort outcomes:</strong> ${cancelCase}, ${successCase}</p>
    <p>${myName}</p>
  `;
})();
