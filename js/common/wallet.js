class ExchangeRateService {
  constructor() {
    this.apiUrl =
      "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";
  }

  async fetchExchangeRates() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      throw new Error("Ошибка при получении данных");
    }
  }
}

const exchangeRateService = new ExchangeRateService();

exchangeRateService
  .fetchExchangeRates()
  .then((data) => {
    console.log("Полученные данные:", data);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  });

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
