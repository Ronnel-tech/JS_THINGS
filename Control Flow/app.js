const form = document.getElementById("moneyForm");
const moneyInput = document.getElementById("moneyInput");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stops page reload

  const money = parseInt(moneyInput.value);

  if (isNaN(money)) {
    alert("Invalid input. Please enter a number.");
  } else if (money < 0) {
    alert("Please enter a positive number.");
  } else if (money >= 1 && money <= 100) {
    alert("You have enough money to buy the item!");
  } else {
    alert("You do not have enough money to buy the item.");
  }
});
