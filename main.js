const bill = document.getElementById("bill");
const tips = document.querySelectorAll(".tip");
const people = document.getElementById("people");
const tipAmount = document.querySelector(".tip-amount");
const totalPerson = document.querySelector(".total-person");
const reset = document.querySelector(".reset-btn");

let tipPercent = 0;

bill.addEventListener("input", calculate);
people.addEventListener("input", calculate);
tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tipPercent = tip.value;
  });
});

function errorCheck(input, msg){
    if (input === '' || input === null){

    }
    else if(!(input.value > 1 && input === people ? 1000 :)){

    }
}

function calculate(tip = "0") {
  console.log(tipPercent);
  console.log(bill.value);
  console.log(people.value);
  console.log(tipPercent * bill.value);
}
