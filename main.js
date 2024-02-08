const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const people = document.getElementById("people");
const tipAmount = document.querySelector(".tip-amount");
const totalPerson = document.querySelector(".total-person");
const reset = document.querySelector(".reset-btn");
const billError = document.querySelector(".billError");
const peopleError = document.querySelector(".peopleError");
const peopleForm = document.querySelector(".peopleForm");
const billForm = document.querySelector(".billForm");
const tipInput = document.querySelector(".tipInput");

let tipPercent = 0;

bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipCheck(tip);
  });
});
tipInput.addEventListener("input", () => {
  tipCheck(tipInput);
});
function tipCheck(tip) {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
  tip.classList.add("active");
  tipPercent = tip.value;
  console.log(tipPercent);
  calculate();
}
function errorCheck() {
  noError = true;
  function validateError(input, form, output) {
    if (input.value === "" || input.value === null || input.value == 0) {
      output.innerText = "Can't be zero";
      form.style.border = "1px solid salmon";
      noError = false;
    } else {
      output.innerText = "";
      form.style.border = "none";
    }
  }
  validateError(bill, billForm, billError);
  validateError(people, peopleForm, peopleError);
  return noError;
}
let totalTip = 0;
function calculate() {
  if (errorCheck()) {
    if (tipPercent) {
      totalTip = bill.value * (tipPercent / 100);
    }
    eachTip = totalTip / people.value;
    totalPay = (parseInt(bill.value) + totalTip) / people.value;
    tipAmount.innerText = eachTip <= 999999 ? `$${eachTip}` : `$999999+`;
    totalPerson.innerText = totalPay <= 999999 ? `$${totalPay}` : `$999999+`;
  }
}

reset.addEventListener("click", () => {
  tipAmount.innerText = "$0";
  totalPerson.innerText = "$0";
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
  bill.value = "";
  people.value = 1;
});
