// Task 1 - DOM Manipulation

const changeTextBtn = document.getElementById("changeTextBtn");
const header = document.getElementById("header");
const paragraph = document.getElementById("paragraph");

changeTextBtn.addEventListener("click", function () {
  header.textContent = "DOM Manipulated!";
  paragraph.textContent = "This paragraph was updated.";

  console.log("[ACTION] changeTextBtn updated header & paragraph.");
});

// Task 2 - Stop Propagation (Target-Level)

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

// Parent listeners are included so bubbling can be observed.
outer.addEventListener("click", function () {
  console.log("[BUBBLE] outer clicked");
});

middle.addEventListener("click", function () {
  console.log("[BUBBLE] middle clicked");
});

inner.addEventListener("click", function (event) {
  console.log("[TARGET] inner clicked - stopPropagation called");
  event.stopPropagation();
});

// Task 3 - Prevent Default

const myLink = document.getElementById("myLink");

myLink.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("[BLOCK] navigation to https://google.com prevented");
});

const myForm = document.getElementById("myForm");
const msgInput = document.getElementById("msgInput");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("[BLOCK] form submission prevented.");
  console.log(`[DATA] msg="${msgInput.value}"`);
});

// Task 4 - Special Mixed Control

const specialBtn = document.getElementById("specialBtn");

specialBtn.addEventListener("click", function (event) {
  header.textContent = "Special Action Triggered";

  console.log("[SPECIAL] triggered: header updated.");

  // Prevent the click from bubbling to #inner, #middle, and #outer.
  event.stopPropagation();
});

// Event Capturing Example

// Capture listener runs during the capturing phase,
// before the event reaches the target.
outer.addEventListener(
  "click",
  function () {
    console.log("[CAPTURE] outer captured click");
  },
  { capture: true },
);

// Bubble listener runs after the target phase.
middle.addEventListener(
  "click",
  function () {
    console.log("[BUBBLE] middle bubble click");
  },
  { capture: false },
);
