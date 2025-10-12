let heightElem = document.getElementById("heightGetter");
let weightElem = document.getElementById("weightGetter");
let calculator = document.querySelector(".calculateBTN");
let resultNumElem = document.querySelector(".resultNum");
let showResultBox = document.querySelector(".showResult");
let removeBoxSign = document.querySelector(".removeBox");
let situationSpanElem = document.querySelector(".situationSpan");
let highWeightRateElem = document.querySelector(".highWeightRate");
let yourHeightElem = document.querySelector(".yourHeight");
let yourWeightElem = document.querySelector(".yourWeight");

calculator.addEventListener("click", (event) => {
  runResult();
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    runResult();
  } else if (e.keyCode === 27) {
    removeResultBox();
  }
});

removeBoxSign.addEventListener("click", () => {
  removeResultBox();
  document.body.classList.remove("bodyMateMode");
});

function removeResultBox() {
  showResultBox.classList.remove("displayResult");
}

// ***************************************************************
heightElem.addEventListener("keyup", () => {
  heightElem.classList.remove("ErrorHeightElem");
});
weightElem.addEventListener("keyup", () => {
  weightElem.classList.remove("ErrorWeightElem");
});
// ***************************************************************

function runResult() {
  if (heightElem.value === "") {
    heightElem.classList.add("ErrorHeightElem");
  } else if (weightElem.value === "") {
    weightElem.classList.add("ErrorWeightElem");
  } else {
    document.body.classList.add("bodyMateMode");

    yourHeightElem.innerHTML = " قد  " + heightElem.value;
    yourWeightElem.innerHTML = " وزن  " + weightElem.value;

    heightElem.classList.remove("ErrorHeightElem");
    weightElem.classList.remove("ErrorWeightElem");

    let bmi = 0;
    bmi = weightElem.value / Math.pow(heightElem.value, 2);

    let result = bmi;
    console.log(result * 10000);
    let lastResult = result * 10000;
    resultNumElem.innerHTML = (result * 10000).toFixed(2);

    if (lastResult < 18.5) {
      situationSpanElem.innerHTML = "کمبود وزن";
      situationSpanElem.style.color = " rgb(214, 247, 27)";
      resultNumElem.style.color = " rgb(214, 247, 27)";
    } else if (lastResult < 24.5 && lastResult > 18.5) {
      situationSpanElem.innerHTML = "وزن سالم";
      situationSpanElem.style.color = "rgb(47, 136, 12)";
      resultNumElem.style.color = "rgb(47, 136, 12)";
    } else if (lastResult < 29.9 && lastResult > 25) {
      situationSpanElem.innerHTML = "اضافه وزن";
      situationSpanElem.style.color = " rgb(255, 81, 0)";
      resultNumElem.style.color = " rgb(255, 81, 0)";
    } else if (lastResult > 30) {
      situationSpanElem.innerHTML = "چاقی";
      situationSpanElem.style.color = " #ff0000";
      resultNumElem.style.color = " #ff0000";
    }

    showResultBox.classList.add("displayResult");

    let CalculationExcessWeight =
      weightElem.value -
      (heightElem.value / 100) * (heightElem.value / 100) * 24.9;
    console.log(Math.floor(CalculationExcessWeight));

    highWeightRateElem.innerHTML = Math.floor(CalculationExcessWeight);

    if (highWeightRateElem > 1) {
      highWeightRateElem.style.color = " rgb(255, 81, 0)";
    } else if (highWeightRateElem === 0) {
      highWeightRateElem.style.color = "  rgb(104, 216, 104)";
    } else {
      highWeightRateElem.style.color = "  rgba(167, 18, 18, 1)";
    }
  }
}

// ***************************************************************************
