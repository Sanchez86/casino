const switcher = document.getElementById("on-off");
const lampSizePx = 26; // Размер лампочки в пикселях
let isBlinking = true; // Переменная состояния мигания

// Функция для расчета количества лампочек в контейнере
const countingLampsOnScreen = (containerSize, lampSize) =>
  Math.floor(containerSize / lampSize);

// Функция для создания лампочки
const createLamp = () => {
  const lamp = document.createElement("div");
  lamp.classList.add("lamp");
  return lamp;
};

// Функция для создания лампочек в контейнере
const createLamps = (container, lampCount) => {
  for (let i = 0; i < lampCount; i++) {
    container.appendChild(createLamp());
  }
  startBlinking(container); // Запускаем мигание
};

// Функция для переключения класса лампочки для включения/выключения
const toggleLampClass = (lamp) => lamp.classList.toggle("on");

// Функция для запуска мигания лампочек в контейнере
const startBlinking = (container) => {
  const lamps = container.querySelectorAll(".lamp");
  lamps.forEach((lamp) => {
    const intervalId = setInterval(() => {
      toggleLampClass(lamp);
    }, Math.random() * 1000 + 500); // Мигаем каждую лампочку с разной частотой (от 0.5 до 1.5 секунд)
    container.intervalIds.push(intervalId); // Сохраняем идентификатор интервала в контейнере
  });
};

// Функция для остановки мигания лампочек в контейнере
const stopBlinking = (container) => {
  container.intervalIds.forEach((intervalId) => clearInterval(intervalId));
  const lamps = container.querySelectorAll(".lamp");
  lamps.forEach((lamp) => lamp.classList.remove("on"));
  container.intervalIds = []; // Очищаем массив идентификаторов интервалов в контейнере
};

// Функция для обработки события клика на переключатель
switcher.addEventListener("click", function () {
  lampsContainers.forEach((container) => {
    if (isBlinking) {
      stopBlinking(container); // Останавливаем мигание
    } else {
      startBlinking(container); // Запускаем мигание снова
    }
  });
  this.classList.toggle("active"); // Переключаем класс "active" для текущего переключателя
  isBlinking = !isBlinking; // Инвертируем переменную состояния мигания
});

// Определение размеров экрана
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Получение контейнеров для лампочек
const lampsContainers = document.querySelectorAll(
  ".lampsTop, .lampsRight, .lampsBottom, .lampsLeft"
);

// Создание лампочек в каждом контейнере
lampsContainers.forEach((container) => {
  let containerSize;
  if (
    container.classList.contains("lampsTop") ||
    container.classList.contains("lampsBottom")
  ) {
    containerSize = screenWidth - 52;
  } else {
    containerSize = screenHeight - 360;
  }
  const lampCount = countingLampsOnScreen(containerSize, lampSizePx);
  container.intervalIds = []; // Создаем массив для хранения идентификаторов интервалов в контейнере
  createLamps(container, lampCount);
});
