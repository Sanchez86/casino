document.querySelectorAll(".tab-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.target;
    // Переключить на выбранный таб
    openTab(tabId);
    // Установить класс active для выбранной кнопки и удалить его для остальных
    document.querySelectorAll(".tab-buttons button").forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
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
