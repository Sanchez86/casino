function initAccount() {
  if (!localStorage.getItem("account")) {
    localStorage.setItem("account", "1000");
  }
}

function getAccount() {
  return localStorage.getItem("account");
}

function updateAccount(amount) {
  let currentAmount = parseInt(localStorage.getItem("account"));
  currentAmount += amount;
  localStorage.setItem("account", currentAmount.toString());
}

initAccount();

const currentBalance = getAccount();
console.log("Текущий счет:", currentBalance);

// const winnings = 500;
// updateAccount(winnings);

// const losses = -200;
// updateAccount(losses);

const balanceAmount = document.getElementById("balance-amount");
balanceAmount.innerText = getAccount();
