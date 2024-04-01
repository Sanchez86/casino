const cube = document.querySelector(".cube-wrap");
const again = document.getElementById("again");
const startButton = document.getElementById("startButton");

const randomNumber = () => Math.floor(Math.random() * 6) + 1;

// function showDiceResult(number) {
//   console.log("The dice rolled:", number);
// }

const buttons = document.querySelectorAll(".btn");
let selectedButton = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "#ccc";
    });
    button.style.backgroundColor = "";

    selectedButton = button.dataset.number;

    startButton.classList.add("active");
  });
});

function resetBtns() {
  startButton.classList.remove("active");

  buttons.forEach((button) => {
    button.style.backgroundColor = "";
  });
}

function startAnimation(selectedButton) {
  const random = randomNumber();
  if (selectedButton) {
    cube.classList.add(`animate-${random}`);
    document.getElementById("startButton").style.display = "none";
  }

  setTimeout(function () {
    if (random === +selectedButton) {
      alert("You WIN!!!");
      updateAccount(1000);
    } else {
      alert("You Lose");
      updateAccount(-100);
    }
    again.style.display = "block";
    cube.classList.remove(`animate-${random}`);
  }, 10000);
}

document.getElementById("startButton").addEventListener("click", () => {
  startAnimation(selectedButton);
});

again.addEventListener("click", function (event) {
  again.style.display = "none";
  document.getElementById("startButton").style.display = "block";
  resetBtns();
});
