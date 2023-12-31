function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return (num1 * num2).toFixed(6);
}

function divide(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "Nice Try"
    } else {
        return (num1 / num2).toFixed(6);
    }
}

function clear() {
    display.innerText = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
}

let firstNumber
    , secondNumber
    , operator;

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}
let display = document.querySelector(".display");

let numberButtons = document.querySelectorAll(".numberbtn")
    , operatorButtons = document.querySelectorAll(".operatorbtn")
    , equalsButton = document.querySelector(".equalsbtn")
    , clearButton = document.querySelector(".clear")
    , decimalButton = document.querySelector(".decimal");

numberButtons.forEach(button => button.addEventListener('click', function () {
    if (operator && Number(display.innerText) == firstNumber) {
        display.innerText = "";
    }
    let storedNumber = button.innerText;
    display.innerText += storedNumber;
}))

decimalButton.addEventListener("click", function () {
    let currentDisplay = display.innerText;
    if (currentDisplay.includes(".")) {
        
    } else {
        display.innerText += "."
    }
})


operatorButtons.forEach(button => button.addEventListener('click', function () {
    if (operator) {
        secondNumber = Number(display.innerText);
        let result = operate(operator, firstNumber, secondNumber)
        display.innerText = result;
    }
    operator = button.innerText;
    firstNumber = Number(display.innerText);
}))

equalsButton.addEventListener("click", function () {
    secondNumber = Number(display.innerText);
    if (operator == null || firstNumber == null || secondNumber == null) {
    } else {
        let result = operate(operator, firstNumber, secondNumber)
        display.innerText = result;
        operator = null;
        firstNumber = null;
        secondNumber = null;
    }
})

clearButton.addEventListener("click", clear)