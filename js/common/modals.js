document.querySelectorAll(".modal-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const modalId = trigger.dataset.target;
    const modal = document.getElementById(modalId);
    // Открыть модальное окно
    modal.classList.add("active");
  });
});

// Закрытие модального окна
document.querySelectorAll(".modal-close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modal = closeBtn.closest(".modal");
    // Закрыть модальное окно
    modal.classList.remove("active");
  });
});
