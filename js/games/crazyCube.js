const cube = document.querySelector(".cube-wrap");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function showDiceResult(number) {
  console.log("The dice rolled:", number);
  // Добавьте сюда логику для отображения результата на кубике
}

function startAnimation() {
  cube.classList.add("animate");
}

function stopAnimation() {
  cube.classList.remove("animate");
}

document.getElementById("startButton").addEventListener("click", () => {
  startAnimation();
  // setTimeout(stopAnimation, 10000);
});
