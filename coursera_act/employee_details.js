// const employees = [
//   { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
//   { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
//   { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
//   //... More employee records can be added here
// ];

// // Function to display all employees
// function displayEmployees() {
//   const totalEmployees = employees
//     .map(
//       (employee) =>
//         `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`,
//     )
//     .join("");
//   document.getElementById("employeesDetails").innerHTML = totalEmployees;
// }

// function calculateTotalSalaries() {
//   const totalSalaries = employees.reduce(
//     (acc, employee) => acc + employee.salary,
//     0,
//   );
//   alert(`Total Salaries: ${totalSalaries}`);
// }

// function displayHREmployees() {
//   const hrEmployees = employees.filter(
//     (employee) => employee.department === "HR",
//   );
//   const hrEmployeesDisplay = hrEmployees
//     .map(
//       (employee, index) =>
//         `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`,
//     )
//     .join("");
//   document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
// }

// function findEmployeeById(employeeId) {
//   const foundEmployee = employees.find(
//     (employee) => employee.id === employeeId,
//   );
//   if (foundEmployee) {
//     document.getElementById("employeesDetails").innerHTML =
//       `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
//   } else {
//     document.getElementById("employeesDetails").innerHTML =
//       "no employee has been found with this ID";
//   }
// }

// function checkInput() {
//   var name = document.getElementById("name");
//   var email = document.getElementById("email");

//   if (name.value == "") {
//     alert("walang laman boi");
//     name.focus();
//     return false;
//   }
//   if (email.value == "") {
//     alert("walang email boi");
//     email.focus();
//     return false;
//   }
//   return alert("goodshit boi");
// }

function removeTask(task) {
  const ul = document.getElementById("todoList"); // Get the list container
  ul.removeChild(task); // Remove the specified task element
}

// Function to edit an existing task
function editTask(span) {
  // Prompt the user to enter a new task description
  const newTask = prompt("Edit your task:", span.textContent);

  // Update the task only if the input is not null or empty
  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim(); // Set the new task text
  }
}

// Function to add a task
// function addTask() {
//   const input = document.getElementById("taskInput");
//   const taskText = input.value.trim();

//   if (taskText !== "") {
//     const ul = document.getElementById("todoList");

//     // Create new list item
//     const li = document.createElement("li");

//     // Create task text element
//     const span = document.createElement("span");
//     span.textContent = taskText;

//     // Create edit button
//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.onclick = () => editTask(span);

//     // Create remove button
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Delete";
//     removeButton.onclick = () => removeTask(li);

//     // Append buttons and text to the list item
//     li.appendChild(span);
//     li.appendChild(editButton);
//     li.appendChild(removeButton);

//     // Append list item to the list
//     ul.appendChild(li);

//     // Clear the input field
//     input.value = "";
//   } else {
//     alert("Please enter a valid task.");
//   }
// }

// const salesTransaction = [
//   { item: "toothpaste", quantity: 5, price: 20 },
//   { item: "butter", quantity: 8, price: 30 },
//   { item: "monkey", quantity: 12, price: 34 },
// ];

// function calculateTotalSales(quantity, price) {
//   return quantity * price;
// }

// const total = salesTransaction.reduce((sum, transaction) => {
//   return sum + calculateTotalSales(transaction.quantity, transaction.price);
// }, 0);

// console.log(total);

function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var amount = parseInt(principal) + parseFloat(interest);
  var result = document.getElementById("result");

  if (principal <= 0) {
    alert("Please enter a positive number!");
    document.getElementById("principal").focus();
  } else {
    result.innerHTML =
      "If you deposit $" +
      "<mark>" +
      principal +
      "</mark>" +
      ",\<br\> at an interest rate of " +
      "<mark>" +
      rate +
      "%" +
      "</mark>" +
      "\<br\> You will receive an amount of $" +
      "<mark>" +
      amount +
      "</mark>" +
      ",\<br\> in the year " +
      "<mark>" +
      year +
      "</mark>" +
      "\<br\>";
  }
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
