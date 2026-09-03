'use strict';

const myName = "Antaran, Ronnel L.";
const app = document.getElementById("app");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fakeFetch({ signal }) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve({ message: "Loaded successfully after 5 seconds" });
    }, 5000);

    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}

function succeed(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} success`), ms);
  });
}

function fail(name, ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`${name} failed`)), ms);
  });
}

(async function main() {
  if (!app) {
    console.error("Missing #app element");
    return;
  }

  // 1) Multiple awaits
  console.log("[1] Start:", new Date().toLocaleTimeString());
  await wait(800);
  console.log("[2] After first wait:", new Date().toLocaleTimeString());
  await wait(500);
  console.log("[3] After second wait:", new Date().toLocaleTimeString());
  await wait(300);
  console.log("[4] After third wait:", new Date().toLocaleTimeString());

  // 2) Promise.all parallel calls
  const parallelResults = await Promise.all([
    succeed("Task A", 1000),
    succeed("Task B", 1500),
    succeed("Task C", 700),
    succeed("Task D", 300),
  ]);
  console.log("Promise.all results:", parallelResults);

  // 3) allSettled / any / race
  const settled = await Promise.allSettled([
    succeed("A", 400),
    fail("B", 700),
    succeed("C", 250),
    fail("D", 500),
  ]);
  console.log("allSettled result:", settled);

  const anyWinner = await Promise.any([
    fail("X", 300),
    fail("Y", 800),
    succeed("Z", 1000),
  ]);
  console.log("Promise.any winner:", anyWinner);

  const raceResult = await Promise.race([
    succeed("Race Success", 300),
    fail("Race Error", 600),
  ]);
  console.log("Promise.race result:", raceResult);

  // 4) fetch with response.ok check
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log("Fetched title:", data.title);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }

  // 5) AbortController sometimes cancel, sometimes succeed
  async function runAbortDemo(abortDelay) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), abortDelay);

    try {
      const result = await fakeFetch({ signal: controller.signal });
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

  const [cancelCase, successCase] = await Promise.all([
    runAbortDemo(1000),
    runAbortDemo(6000),
  ]);

  app.innerHTML = `
    <p class="ok"><strong>Async demo complete.</strong></p>
    <p><strong>Promise.all:</strong> ${parallelResults.join(", ")}</p>
    <p><strong>Promise.any winner:</strong> ${anyWinner}</p>
    <p><strong>Promise.race:</strong> ${raceResult}</p>
    <p><strong>Abort outcomes:</strong> ${cancelCase}, ${successCase}</p>
    <p>${myName}</p>
  `;
})();
