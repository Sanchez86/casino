const balanceAmount = document.getElementById("balance-amount");
balanceAmount.innerText = getAccount();

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
  balanceAmount.innerText = getAccount();
}

initAccount();

const currentBalance = getAccount();
console.log("Текущий счет:", currentBalance);

// const winnings = 500;
// updateAccount(winnings);

// const losses = -200;
// updateAccount(losses);

function addDepositHandle() {
  const sum = document.getElementById("addDeposit").value;

  updateAccount(+sum);
  closeModal();
}
const addMoney = document.getElementById("addDepositHandle");
addMoney.addEventListener("click", addDepositHandle);
