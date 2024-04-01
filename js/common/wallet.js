class CurrencyService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchCurrency() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching currency data:", error);
      throw new Error("Error fetching currency data");
    }
  }
}

const currencyService = new CurrencyService(
  "https://api.monobank.ua/bank/currency"
);

let usdRate = null;

async function initialize() {
  try {
    const data = await currencyService.fetchCurrency();
    const usdData = data.find(
      (currency) =>
        currency.currencyCodeA === 840 && currency.currencyCodeB === 980
    );
    if (usdData) {
      usdRate = usdData.rateBuy;
      const usdId = document.getElementById("usd-id");
      if (usdId) {
        usdId.innerText = (getAccount() / usdRate).toFixed(2);
      }
    }
    updateAccountDisplay();
  } catch (error) {
    console.error("Error:", error.message);
  }

  balanceAmount.innerText = getAccount();
}

function initAccount() {
  if (!localStorage.getItem("account")) {
    localStorage.setItem("account", "1000");
  }
}

function getAccount() {
  return localStorage.getItem("account");
}

function updateAccount(amount) {
  let currentAmount = parseFloat(localStorage.getItem("account"));
  currentAmount += amount;
  localStorage.setItem("account", currentAmount.toString());
  balanceAmount.innerText = currentAmount.toFixed(2);
  updateAccountDisplay();
}

function updateAccountDisplay() {
  if (usdRate !== null) {
    const usdId = document.getElementById("usd-id");
    let currentAmount = parseFloat(localStorage.getItem("account"));
    if (usdId) {
      usdId.innerText = (currentAmount / usdRate).toFixed(2) + "$";
    }
  }
}

initAccount();
initialize();

const balanceAmount = document.getElementById("balance-amount");
balanceAmount.innerText = getAccount();

const currentBalance = getAccount();
console.log("Current balance:", currentBalance);

function addDepositHandle() {
  const sum = parseFloat(document.getElementById("addDeposit").value);
  updateAccount(sum);
  closeModal();
}

const addMoney = document.getElementById("addDepositHandle");
addMoney.addEventListener("click", addDepositHandle);
