const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const people = document.getElementById("people");
const tipAmount = document.querySelector(".tip-amount");
const totalPerson = document.querySelector(".total-person");
const reset = document.querySelector(".reset-btn");
const billError = document.querySelector('.billError')
const peopleError = document.querySelector('.peopleError')
const inputForm = document.querySelectorAll('.inputForm')


let tipPercent = 0;

bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipPercent = tip.value;
  });
});

function errorCheck(input, msg, output){
    if (input === '' || input === null){
        output.innerText = "Can't be zero"
    }
    else if(!(input.value > 1 && input === people ? input.value < 1000 : input.value <= 999999)){
        output.innerText = msg
    }   
}

function calculate(tip = "0") {
  console.log(tipPercent);
  console.log(bill.value);
  console.log(people.value);
  console.log(tipPercent * bill.value);
}
