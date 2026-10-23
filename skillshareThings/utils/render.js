export function render(root) {
  root.innerHTML = `
    <div>
      <span id="user-message"></span>
    </div>
  `;
}

export function displayUserMessage(element, message, isAuthenticated) {
  element.textContent = message;
  element.style.color = isAuthenticated ? "green" : "red";
}
