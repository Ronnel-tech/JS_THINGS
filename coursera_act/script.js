document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recommendationForm");
  const recommendationList = document.getElementById("recommendationList");
  const popup = document.getElementById("popup");
  let popupTimer = null;

  function showPopup() {
    popup.classList.add("show");

    if (popupTimer) {
      window.clearTimeout(popupTimer);
    }

    popupTimer = window.setTimeout(() => {
      popup.classList.remove("show");
    }, 2200);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("recommenderName");
    const messageInput = document.getElementById("recommenderMessage");
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
      return;
    }

    const recommendationCard = document.createElement("article");
    recommendationCard.className = "recommendation-card";
    recommendationCard.innerHTML = `
      <p>${message}</p>
      <span>${name}</span>
    `;

    recommendationList.appendChild(recommendationCard);
    form.reset();
    showPopup();
  });
});
