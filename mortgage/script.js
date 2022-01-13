const calc = document.querySelector('.calc');
const conditions = calc.querySelector('.form__conditions');
const banks = calc.querySelector('.form__banks');

// Conditions variables
let cost = 0;
let initialPay = 0;
let creditTerm = 0;
let bankRate = +calc.querySelector('input[type="radio"]:checked').value;

console.log(cost, initialPay, creditTerm, bankRate);

// Work with output data
const creditSum = calc.querySelector('#credit-sum > .result-value');
const monthlyPay = calc.querySelector('#monthly-pay > .result-value');
const recommendedIncome = calc.querySelector('#recommended-income > .result-value');

// console.log(creditSum, monthlyPay, recommendedIncome);

// Handle a bank section
function handleConditions(event) {
  const target = event.target;
  if (target.classList.contains('condition')) {
    console.log(+target.value, target.id);
  }
}

conditions.addEventListener('input', handleConditions);

// Handle a bank section
function handleBank(event) {
  const target = event.target;
  if (target.classList.contains('bank')) {
    console.log(+target.value, target.id);
  }
}

banks.addEventListener('click', handleBank);
