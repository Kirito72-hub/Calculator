//popluate screen input
let displayValue = "";
//General variables for now
let x = null,
    y = null,
    result = null;
// adding 4 functions add subtract multiply divide
function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Error"; // Handle division by zero
    }
};

// Function that takes 2 numbers and 1 operator and calls the appropriate function
function operator(x, y, opType) {
    let result;
    switch (opType) {
        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;
        default:
            return "Error"; // Handle unknown operations
    }
    return result.toFixed(2); // Format result to 2 decimal places
}

//function that update the display
function updateDisplay(value){
    const display = document.querySelector(".screen");
    // displayValue += value;
    display.textContent = displayValue;
};

//Attach Event Listeners to Number Buttons
const numberButtons = document.querySelectorAll(".btn.number");
numberButtons.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        displayValue += event.target.textContent;
        updateDisplay();
    });
});
//pressing the operator button
const operatorButton = document.querySelectorAll(".btn.operator");
operatorButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        if(x !== null){
            equalButton.click();
            opType = event.target.textContent;
        }else{
            x = parseFloat(displayValue);
            opType = event.target.textContent;
            displayValue = "";
            updateDisplay();
        }
    });
});
//equal button action
const equalButton = document.querySelector(".btn.unique");
equalButton.addEventListener("click", (event) => {
    y = parseFloat(displayValue);
    let result = operator(x, y, opType);
    displayValue = result;
    updateDisplay();
    displayValue = "";
    x = result;
});

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
    });
});