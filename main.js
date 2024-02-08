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

//Event Delegation for each input and tip
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

// tipCheck Function because there's 2 kind of tip, list button and input
function tipCheck(tip) {
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
  tip.classList.add("active");
  tipPercent = tip.value;
  calculate();
}

//error Checking function to ensure the input number is not empty
//dont need to check if it's number because using number type
function errorCheck() {
  noError = true;
  function validateError(input, form, output) {
    if (input.value === "" || input.value === null || input.value == 0) {
      output.innerText = "Please input valid number";
      form.style.borderColor = "salmon";
      noError = false;
    }
    //incase the input is correct, return all to 'normal'
    else {
      output.innerText = "";
      form.style.borderColor = "hsl(189, 41%, 97%)";
    }
  }
  validateError(bill, billForm, billError);
  validateError(people, peopleForm, peopleError);
  return noError;
}

//main function, to directly calculate and display for each input(based on event delegation)
let totalTip = 0;
function calculate() {
  //only do the calculation if it pass errorCheck or the noError is true
  if (errorCheck()) {
    //just to make sure tipPercent isn't NaN or null
    if (tipPercent) {
      totalTip = bill.value * (tipPercent / 100);
    }
    eachTip = totalTip / people.value;
    totalPay = (parseInt(bill.value) + totalTip) / people.value;

    // setting up maximum number of the calculation to prevent ui number overflow
    let maxDisplayNumber = 999999;
    tipAmount.innerText =
      eachTip > maxDisplayNumber
        ? `$${maxDisplayNumber}+`
        : eachTip % 1 != 0
        ? `$${eachTip.toFixed(2)}`
        : `$${eachTip}`;
    totalPerson.innerText =
      totalPay > maxDisplayNumber
        ? `$${maxDisplayNumber}+`
        : totalPay % 1 != 0
        ? `$${totalPay.toFixed(2)}`
        : `$${totalPay}`;
  }
}

//reset button
reset.addEventListener("click", () => {
  tipAmount.innerText = "$0";
  totalPerson.innerText = "$0";
  tips.forEach((tip) => {
    tip.classList.remove("active");
  });
  bill.value = "";
  people.value = 1;
});
