import { render } from "./render.js";
import { BankAccount } from "./bankAccount.js";

const bankAccount = new BankAccount();

export function main() {
  renderIndex();
  deposit();
  displayData();
}

function renderIndex() {
  const root = document.getElementById("root");
  render(root);
}

function deposit() {
  bankAccount.deposit(10000);
}

function displayData() {
  const bankAccountDisplay = document.getElementById("bank-account-display");
  bankAccountDisplay.textContent = `Bank Account Balance: ${bankAccount.balance}`;
}
