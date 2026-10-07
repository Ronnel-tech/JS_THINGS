"use strict";

// const songs = [];
//
// const song1 = {
//   song: "AShape of you1",
//   timeStreamed: 1.384,
//   wonGrammy: true,
// };
// const song2 = {
//   song: "AShape of you2",
//   timeStreamed: 2.384,
//   wonGrammy: true,
// };
// const song3 = {
//   song: "Shape of you3",
//   timeStreamed: 2.384,
//   wonGrammy: true,
// };
// const song4 = {
//   song: "Shape of you4",
//   timeStreamed: 2.384,
//   wonGrammy: false,
// };
//
// songs.push(song1, song2, song3, song4);
//
// const hasWonGrammy = songs.some((song) => song.wonGrammy === true);
// const hasTimeStreamed = songs.every((song) => song.timeStreamed > 1.5);
//
// console.log(hasWonGrammy, hasTimeStreamed);
//
// songs
//   .map((song) =>
//     song.timeStreamed > 2.3
//       ? { ...song, great: true }
//       : { ...song, great: false },
//   )
//   .forEach((song) => {
//     if (song.great) {
//       console.log(`The ${song.song} is great`);
//     }
//   });
//
// const res = songs.filter((song) => song.timeStreamed > 2.3);
// console.log(res);

// const cars = [];
//
// const car1 = {
//   name: "Toyota",
//   isElectric: false,
//   year: 2023,
//   color: "red",
// };
// const car2 = {
//   name: "Ford",
//   isElectric: false,
//   year: 2022,
//   color: "red",
// };
// const car3 = {
//   name: "Volkswagen",
//   isElectric: true,
//   year: 2003,
//   color: "white",
// };
// const car4 = {
//   name: "Honda",
//   isElectric: false,
//   year: 2021,
//   color: "yellow",
// };
// const car5 = {
//   name: "BMW",
//   isElectric: true,
//   year: 2000,
//   color: "red",
// };
// cars.push(car1, car2, car3, car4, car5);
//
// const totalYear = cars.reduce((sum, car) => {
//   if (!car.isElectric) {
//     return sum + car.year;
//   } else {
//     return sum;
//   }
// }, 0);
//
// console.log(totalYear);

// const numbers = [];
// numbers.push(1, 2, 3, 4, 5);
//
// const multiplyNumber = numbers.reduce((reducer, number) => {
//   if (number > 3) {
//     reducer.push(number);
//   }
//   return reducer;
// }, []);
//
// console.log(multiplyNumber);

// const launchMenu = ["Lunch", "Dinner", "Breakfast"];
// const newLaunchMenu = [...launchMenu];
//
// newLaunchMenu.push("Snacks");
//
// console.log(launchMenu);
// console.log(newLaunchMenu);

// Update "Harvest Salad to Garden salad"

// const breakFast = ["Buckwheat Porridge"];
// const dinner = ["Glazed Salmon"];
//
// const allMeals = [...breakFast, "Harvest Salad", ...dinner];
//
// const findIndex = allMeals.findIndex((meal) => meal === "Harvest Salad");
//
// const finalMeals = [
//   ...allMeals.slice(0, findIndex),
//   "Garden Salad",
//   ...allMeals.slice(findIndex + 1),
// ];
//
// console.log(finalMeals);
//
// console.log(allMeals);

// done: Array Destructuring

// const menuItems = [];
// menuItems.push("Meatballs", "Pasta", "Burger", "Fries");
// const [winner, ...losers] = menuItems;
//
// console.log(`the winner is: ${winner}`);
// console.log(`losers are: ${losers}`);

//done: array destructuring activity

// const fishDishes = [
//   "Salmon Rillettes",
//   "Grilled Tuna Provencal",
//   "Fish and Chips",
// ];
// const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];
//
// // Modify these four variables first
// const [faveFish] = fishDishes;
// const [, ...regularFishes] = fishDishes;
//
// const [, , faveMeat] = meatDishes;
// const [regularMeat1, regularMeat2] = meatDishes;
//
// // Finally, use the spread operator to create these two arrays as well
// const chefsFaveDishes = [faveFish, faveMeat];
// let regularDishes = [...regularFishes, regularMeat1, regularMeat2];
//
// console.log(chefsFaveDishes);
// console.log(regularDishes);

// todo: turning objects to Arrays

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
//
// const getPersonKey = (person) => console.log(Object.keys(person));
// getPersonKey(person);

// const monthlyExpenses = {
//   food: 6000,
//   rent: 1500,
//   transportation: 500,
//   insurance: 200,
//   entertainment: 100,
// };
//
// const getMonthlyExpenses = () =>
//   Object.values(monthlyExpenses).reduce(
//     (sum, initialValue) => sum + initialValue,
//     0,
//   );
// console.log(getMonthlyExpenses());

// const users = {};
//
// users["1"] = {
//   name: "Ronnel",
//   age: 22,
// };
//
// users["2"] = {
//   name: "John",
//   age: 30,
// };
//
// users["3"] = {
//   name: "Jane",
//   age: 15,
// };
//
// const getUserAgeOver20 = Object.entries(users).reduce((acc, [id, user]) => {
//   if (user.age > 20) {
//     acc.push({ ...user, id });
//   }
//   return acc;
// }, []);
//
// console.log(getUserAgeOver20);

// //todo: Learning about sets
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 5, 4];
//
// const newNum = [...new Set(numbers)];
//
// for (const num of newNum) {
//   console.log(num);
// }

//todo: Learning about Constructor Functions

// function StudentInfo(name, id, subjects = []) {
//   this.name = name;
//   this.id = id;
//   this.subjects = subjects;
// }
//
// //
// // StudentInfo.prototype.addSubject = function (...subject) {
// //   this.subjects = [...this.subjects, subject];
// // };
// //
// const student1 = new StudentInfo("Ronnel", 1);
// // const student2 = new StudentInfo("John", 2);
// // const student3 = new StudentInfo("Jane", 3);
//
// console.log(Object.getPrototypeOf(student1).constructor);

// student1.addSubject("Math", "English");
// student2.addSubject("Science", "History");
// student3.addSubject("Art", "Music", "English");
//
// console.log(student1);
// console.log(student2);
// console.log(student3);

// function Books(id, title, author, themes = []) {
//   this.id = id;
//   this.title = title;
//   this.author = author;
//   this.themes = themes;
// }
// Books.prototype.addTheme = function (theme) {
//   this.themes = [...this.themes, theme];
// };
//
// const Book1 = new Books(1, "Ang pagong at Matsing", "Luis Soriano");
// Book1.addTheme("Sports", "Politics", "History");
//
// const Book2 = new Books(1, "Ang pagong at Matsing", "Luis Soriano");
// Book2.addTheme("1999");
// Book2.addTheme("fhdhdfhdfh");
// console.log(Book1);
// console.log(Book2);

// todo: Prototypal Inheritance with Classes

// class Student {
//     constructor(name, id, subject = []) {
//     this.name = name;
//     this.id = id;
//     this.subject = subject;
//   }
//   addSubject(...subject) {
//     this.subject = [...this.subject, subject];
//   }
// }
//
// const student2 = new Student("John", 2);
// student2.addSubject("Math", "English");
// console.log(student2);

//todo: My First Class

// class Films {
//   constructor(id, title, director, releaseYear, genre = []) {
//     this.id = id;
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//     this.genre = genre;
//   }
//   AddGenre(...genre) {
//     this.genre = [...this.genre, genre];
//   }
//   getFilmTitle() {
//     return `Title: ${this.title}`;
//   }
// }
//
// const film1 = new Films(1, "Ang pagong at Matsing", "Luis Soriano", 1999);
// film1.AddGenre("Sports", "Politics", "History");
// console.log(film1.getFilmTitle());
// console.log(film1);

//todo: Inheritance

// class Product {
//   constructor(name, discountable) {
//     this.name = name;
//     this.discountable = discountable;
//   }
//   isDiscountable() {
//     return this.discountable;
//   }
// }
//
// class SaleProduct extends Product {
//   constructor(name, discountable, price) {
//     super(name, discountable);
//     this.price = price;
//   }
//   getSalePrice() {
//     if (super.isDiscountable()) {
//       return this.price * 0.9;
//     } else return `Not Discountable`;
//   }
// }
// const saleProduct1 = new SaleProduct("Laptop", false, 1000);
// console.log(saleProduct1.getSalePrice());

// todo: Getters and Setters

// class Student {
//   constructor(name, id, grade) {
//     this._name = name;
//     this._id = id;
//     this._grade = grade;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }
//   get id() {
//     return this._id;
//   }
//   set id(id) {
//     if (id <= 0) {
//       throw new Error("ID must be greater than 0");
//     } else {
//       this._id = id;
//     }
//   }
//   get grade() {
//     return this._grade;
//   }
//   set grade(grade) {
//     this._grade = grade;
//   }
// }
//
// const student1 = new Student("Ronnel", 1, 100);
// console.log(student1);
// student1.grade = 99;
// console.log(student1.grade);

//todo: Learning about .bind()

// const isAuth = true;
//
// const user = {
//   favorites: [],
// };
//
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   addFavorite() {
//     if (isAuth) {
//       user.favorites.push(this.name);
//     } else {
//       throw new Error("You are not authenticated");
//     }
//   }
//   favoriteHandle() {
//     setTimeout(function() {
//       this.addFavorite();
//       console.log(`${user.favorites} is added to favorite`);
//     }.bind(this), 1000);
//   }
// }
//
// const Product1 = new Product("Laptop", 1000);
// Product1.favoriteHandle();

// todo: Problem 1

// const Students = [
//   { name: "John", age: 20, grade: 85 },
//   { name: "Mark", age: 22, grade: 92 },
//   { name: "Jane", age: 19, grade: 76 },
//   { name: "Anna", age: 21, grade: 95 },
// ];
//
// const honorStudents = Students.filter((student) => student.grade >= 90).map(
//   (student) => student.name,
// );
// console.log(honorStudents);

// todo: Problem 2

// const user = {
//   101: { name: "John", age: 20 },
//   102: { name: "Jane", age: 19 },
//   103: { name: "Mark", age: 22 },
// };
//
// const newUser = Object.entries(user).map(([id, user]) => ({ id, ...user }));
// console.log(newUser);

// todo: Problem 3

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     return count;
//   }
//   return increment;
// }
//
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//todo: Problem 4
//
// const person = {
//   name: "Ronnel",
//
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
//
// const greet = person.greet.bind(person);
//
// greet();

// todo: Problem 5

// class Product {
//   constructor(name, price, quantity) {
//     this._name = name;
//     this._price = price;
//     this._quantity = quantity;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(name) {
//     this._name = name;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(price) {
//     this._price = price;
//   }
//   get quantity() {
//     return this._quantity;
//   }
//   set quantity(quantity) {
//     this._quantity = quantity;
//   }
//   getTotalPrice() {
//     return this.price * this.quantity;
//   }
//   addStock(amount) {
//     return (this.quantity += amount);
//   }
// }
// const newProduct = new Product("Laptop", 1000, 10);
// console.log(newProduct.addStock(5));
// console.log(newProduct.getTotalPrice());

//todo: DOM

// const newPost = document.createElement("div");
// newPost.className = "post";
// newPost.innerHTML = `
//     <h2>New Post</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//         nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
//         anim id est laborum.</p>
// `;
//
// const post = document.querySelector(".post");
// post.prepend(newPost);

// const title = document.getElementById("title");
// title.innerText = "Creating and Modifying HTML Elements";
//
// const subTitle = document.createElement("p");
// subTitle.innerText = "I can create HTML Elements";
//
// title.append(subTitle);

//todo: Events
//
// const title = document.getElementById("title");
// title.addEventListener("click", (event) => console.log(event.target));
//
// const posts = document.querySelectorAll(".post");
// posts.forEach((post) =>
//   post.addEventListener("click", () => console.log("This post is clicked")),
// );

const texts = document.querySelectorAll("h1");
texts.forEach((text) =>
  text.addEventListener("click", (event) =>
    console.log(event.target.textContent),
  ),
);
