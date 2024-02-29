document.querySelectorAll(".tab-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.target;
    // Переключить на выбранный таб
    openTab(tabId);
  });
});

// Функция для открытия таба
function openTab(tabId) {
  // Скрыть все табы
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  // Показать выбранный таб
  document.getElementById(tabId).classList.add("active");
}
