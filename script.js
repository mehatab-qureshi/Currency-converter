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
  option1.textContent = option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

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
