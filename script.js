//popluate screen input
let displayValue = "";
//General variables for now
let x, y, opType;
// adding 4 functions add subtract multiply divide
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Error"; // Handle division by zero
    }
}

// empty function for now will take 2 numbers and 1 operator and according to the operator will call operator function from the above ones
function operator(x, y, opType) {
    switch (opType) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return "Error"; // Handle unknown operations
    }
}

//function that update the display
function updateDisplay(value){
    const display = document.querySelector(".screen");
    displayValue += value;
    display.textContent = displayValue;
}

//Attach Event Listeners to Number Buttons
const numberButtons = document.querySelectorAll(".btn.number");
numberButtons.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        updateDisplay(event.target.textContent);
    })
})
//pressing the operator button
const operatorButton = document.querySelectorAll(".btn.operator");
operatorButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        x = parseFloat(displayValue);
        opType = event.target.textContent;
        displayValue = "";
        updateDisplay(displayValue);
    })
})
//pressing the equal button
const equalButton = document.querySelectorAll(".btn.unique");
equalButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        y = parseFloat(displayValue);
        displayValue = "";
        updateDisplay(operator(x, y, opType));
        
    })
})
//clear buttons event listener
const clearButton = document.querySelectorAll(".btn.clear");
clearButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        if(event.target.textContent === "C")
            updateDisplay(displayValue="");
        else{
            x=0;
            y=0;
            updateDisplay(displayValue="");
        }
    })
})