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
