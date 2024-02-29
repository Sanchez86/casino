const lampSizePx = 26; // Размер лампочки в пикселях

const countingLampsOnScreen = (containerSize, lampSize) => {
  // Рассчитываем количество лампочек в контейнере
  return Math.floor(containerSize / lampSize);
};

const createLamps = (container, lampCount) => {
  // Создаем заданное количество лампочек в контейнере
  for (let i = 0; i < lampCount; i++) {
    const lamp = document.createElement("div");
    lamp.classList.add("lamp");
    container.appendChild(lamp);
  }
};

const toggleLampClass = (lamp) => {
  // Переключаем класс лампочки для включения/выключения
  lamp.classList.toggle("on");
};

const startBlinking = (container) => {
  // Получаем все лампочки в контейнере
  const lamps = container.querySelectorAll(".lamp");
  lamps.forEach((lamp) => {
    setInterval(() => {
      toggleLampClass(lamp);
    }, Math.random() * 1000 + 500); // Мигаем каждую лампочку с разной частотой (от 0.5 до 1.5 секунд)
  });
};

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const lampsContainers = document.querySelectorAll(
  ".lampsTop, .lampsRight, .lampsBottom, .lampsLeft"
);

// Создаем лампочки и запускаем мигание для каждого контейнера
lampsContainers.forEach((container) => {
  // Определяем размеры контейнера
  let containerSize;
  if (
    container.classList.contains("lampsTop") ||
    container.classList.contains("lampsBottom")
  ) {
    containerSize = screenWidth - 52;
  } else {
    containerSize = screenHeight - 360;
  }

  // Определяем количество лампочек для текущего контейнера
  const lampCount = countingLampsOnScreen(containerSize, lampSizePx);

  // Создаем лампочки
  createLamps(container, lampCount);

  // Запускаем мигание
  startBlinking(container);
});
