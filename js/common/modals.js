// Открытие модального окна
document.querySelectorAll(".modal-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.dataset.target;
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Закрытие модального окна при щелчке вне его области
    window.addEventListener("click", outsideClickHandler);
  });
});

// Закрытие модального окна
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", closeModal);
});

// Функция для закрытия модального окна
function closeModal() {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => (modal.style.display = "none"));

  // Удаление обработчика события для закрытия модального окна при щелчке вне его области
  window.removeEventListener("click", outsideClickHandler);
}

// Обработчик события для закрытия модального окна при щелчке вне его области
function outsideClickHandler(event) {
  const { target } = event;
  const modalContent = target.closest(".modal-content");
  if (!modalContent && !target.classList.contains("modal-trigger")) {
    closeModal();
  }
}
