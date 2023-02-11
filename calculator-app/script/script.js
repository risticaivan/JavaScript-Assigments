const numBtns = document.querySelectorAll('.btn-num');
const operationBtns = document.querySelectorAll('.btn-operation');
const equalBtn = document.querySelector('.btn-equal');
const clearOneBtn = document.querySelector('.clear-one');
const clearAllBtn = document.querySelector('.clear-all');
const currentResult = document.querySelector('.result-current');
const previousResult = document.querySelector('.result-previous');
const dotBtn = document.querySelector('.btn-dot');

// AC BUTTON TO CLEAR currentResult AND previousResult
clearAllBtn.addEventListener('click', () => {
  currentResult.innerText = "";
  previousResult.innerText = "";
})
// CLEAR ONE NUMBER
clearOneBtn.addEventListener('click', () => {
  currentResult.innerText = currentResult.innerText.toString().slice(0, -1);
})
// ADDING NUMBERS TO currentResult 
numBtns.forEach(button => {
  button.addEventListener('click', () => {
    currentResult.innerText = currentResult.innerText + button.innerText;
  })
})
// ADDING OPERATIONS TO currentResult
operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === "+") {
      currentResult.innerText = currentResult.innerText + button.innerText;
    }
    if (button.innerText === "-") {
      currentResult.innerText = currentResult.innerText + button.innerText;
    }
    if (button.innerText === "*") {
      currentResult.innerText = currentResult.innerText + button.innerText;
    }
    if (button.innerText === "÷") {
      currentResult.innerText = currentResult.innerText + "/";
    }
  })
})
// ADDING DECIMAL POINT TO currentResult
dotBtn.addEventListener('click', () => {
    currentResult.innerText = currentResult.innerText + dotBtn.innerText;
})
// EQUAL (RESULT) & CATCH ERROR IF MORE THAN ONE DECIMAL POINT
equalBtn.addEventListener('click', () => {
  if (currentResult.innerText === "") {
    return
  }
  else {
    try {
      previousResult.innerText = eval(currentResult.innerText);
      currentResult.innerText = previousResult.innerText;
    }
    catch {
      previousResult.innerText = 'ERROR CHECK THE INPUT';
    }
  }
})

// KEYBOARD SUPPORT
window.addEventListener('keydown', (e) => {
  // AC BUTTON TO CLEAR currentResult AND previousResult
  if (e.key === "Escape") {
    currentResult.innerText = "";
    previousResult.innerText = "";
  }
  // CLEAR ONE NUMBER
  if (e.key === "Backspace") {
    currentResult.innerText = currentResult.innerText.toString().slice(0, -1);
  }
  // EQUAL (RESULT) & CATCH ERROR IF MORE THAN ONE DECIMAL POINT
  if (e.key === "Enter" || e.key === "=") {
    if (currentResult.innerText === "") {
      return
    }
    else {
      try {
        previousResult.innerText = eval(currentResult.innerText);
        currentResult.innerText = previousResult.innerText;
      }
      catch {
        previousResult.innerText = 'ERROR CHECK THE INPUT';
      }
    }
  }
  // ADDING OPERATIONS TO currentResult
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (e.key === "+") {
      currentResult.innerText = currentResult.innerText + e.key;
    }
    if (e.key === "-") {
      currentResult.innerText = currentResult.innerText + e.key;
    }
    if (e.key === "*") {
      currentResult.innerText = currentResult.innerText + e.key;
    }
    if (e.key === "÷") {
      currentResult.innerText = currentResult.innerText + e.key;
    }
  }
  // ADDING NUMBERS TO currentResult 
  if (e.key >= 0 && e.key <= 9) {
    currentResult.innerText = currentResult.innerText + e.key;
  }
  // ADDING DECIMAL POINT TO currentResult AND PREVENTING MORE THAN ONE
  if (e.key === ".") {
      currentResult.innerText = currentResult.innerText + e.key;
  }
});