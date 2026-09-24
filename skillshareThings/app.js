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

const users = {};

users["1"] = {
  name: "Ronnel",
  age: 22,
};

users["2"] = {
  name: "John",
  age: 30,
};

users["3"] = {
  name: "Jane",
  age: 15,
};

const getUserAgeOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }
  return acc;
}, []);

console.log(getUserAgeOver20);


console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");