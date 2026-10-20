const status = document.getElementById("status");
const testButton = document.getElementById("testButton");
const message = document.getElementById("message");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration.scope);
      status.textContent = "Service Worker registered successfully!";
    })
    .catch((error) => {
      console.error("Registration failed:", error);
      status.textContent = "Service Worker registration failed.";
    });
} else {
  status.textContent = "Service Workers are not supported.";
}

testButton.addEventListener("click", () => {
  message.textContent = "JavaScript is working correctly!";
});
