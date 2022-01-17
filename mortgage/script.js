// Gentral blocks
const $calc = document.querySelector('.calc');
const $conditions = $calc.querySelector('.form__conditions');
const $banks = $calc.querySelector('.form__banks');

// Conditions variables
let cost = 0;
let initialPay = 0;
let creditTerm = 12;
let bankRate = +$calc.querySelector('input[type="radio"]:checked').value;

// Work with output data
const $creditSum = $calc.querySelector('#credit-sum > .result-value');
const $bankPersent = $calc.querySelector('#bank-persent > .result-value');
const $totalPay = $calc.querySelector('#total-pay > .result-value');
const $monthlyPay = $calc.querySelector('#monthly-pay > .result-value');
const $recommendedIncome = $calc.querySelector('#recommended-income > .result-value');

// Handle a bank rate section
function handleConditions(event) {
  const target = event.target;
  if (!target.classList.contains('condition')) return;

  // console.log(+target.value, target.id);
  switch (target.id) {
    case 'cost':
      cost = +target.value;
      break;
    case 'initial-pay':
      initialPay = +target.value;
      if (initialPay >= cost) {
        target.value = cost;
        initialPay = cost;
      }
      break;
    case 'credit-term':
      creditTerm = +target.value || 1;
      break;
    default:
      break;
  }

  setResult();
}

$conditions.addEventListener('input', handleConditions);

// Handle a bank section
function handleBank(event) {
  const target = event.target;
  if (!target.classList.contains('bank')) return;

  bankRate = +target.value;
  setResult();
}

$banks.addEventListener('click', handleBank);

// Рассчёт и установка выходных значений
function setResult() {
  const creditSum = cost - initialPay;
  const bankPersent = creditSum / 100 * bankRate;
  const totalPay = creditSum + bankPersent;
  const monthlyPay = totalPay / creditTerm;
  const baseIncome = 50000;

  $creditSum.textContent = creditSum;
  $bankPersent.textContent = bankPersent.toFixed(2);
  $totalPay.textContent = totalPay.toFixed(2);
  $monthlyPay.textContent = monthlyPay.toFixed(2);
  $recommendedIncome.textContent = Math.ceil(monthlyPay) + baseIncome;
}
