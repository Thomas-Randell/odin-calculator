function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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

let numberButtons = document.querySelectorAll(".numberbtn");
let operatorButtons = document.querySelectorAll(".operatorbtn")
let equalsButton = document.querySelector(".equalsbtn")

numberButtons.forEach(button => button.addEventListener('click', function () {
    let storedNumber = button.innerText;
    display.innerText += storedNumber;
}))

operatorButtons.forEach(button => button.addEventListener('click', function () {
    operator = button.innerText;
}))

equalsButton.addEventListener("click", function() {
    let result = operate(operator, firstNumber, secondNumber)
    display.innerText = result;
})
