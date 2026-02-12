const fromAmountElement = document.querySelector(".amount");
const convertedAmountElement = document.querySelector(".convertedAmount");
const fromCurrencyElement = document.querySelector(".fromCurrency");
const toCurrencyElement = document.querySelector(".toCurrency");
const resultElement = document.querySelector(".result");

const countries = [
  { code: "USD", name: "United States Dollar" },
  { code: "INR", name: "Indian Rupee" },
];

//showing countries array we took here
countries.forEach((country) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.value = option2.value = country.code;
  option1.textContent =
    option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

  fromCurrencyElement.value = "USD";
  toCurrencyElement.value = "INR";

  //can also write this abv code
  //   const option1 = document.createElement("option");
  //   option1.value = country.code;
  //   option1.textContent = `${country.code} (${country.name})`;
  //   fromCurrencyElement.appendChild(option1);

  //   const option2 = document.createElement("option");
  //   option2.value = country.code;
  //   option2.textContent = `${country.code} (${country.name})`;
  //   toCurrencyElement.appendChild(option2);
});

//funct to get exchnage rate using tag
const getExchangeRate = async () => {
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  //fetch data from api
  const response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`,
  );
  const data =await response.json();

  const conversionRate = data.rates(toCurrency);
  const convertedAmount = (amount * conversionRate);

  convertedAmountElement.value = convertedAmount;
};

fromAmountElement.addEventListener("input", getExchangeRate);
