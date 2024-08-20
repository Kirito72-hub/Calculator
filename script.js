let displayValue = "";
<<<<<<< HEAD
let x = null; // First operand
let y = null; // Second operand
let opType = null; // Current operator

// Corrected arithmetic functions
function add(x, y) {
    return x + y; // Corrected to perform addition
=======
//General variables for now
let x, y, opType;
// adding 4 functions add subtract multiply divide
function add(x, y){
    return x+y;
>>>>>>> parent of ae1fd2b (optimized the 4 operator functions)
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

<<<<<<< HEAD
function divide(x, y) {
    if (y === 0) {
        return "Error"; // Handle division by zero
    }
    return x / y;
}

// Function to perform operation based on the operator
function operator(x, y, opType) {
=======
function divide(x, y){
    return x/y;
}

// empty function for now will take 2 numbers and 1 operator and according to the operator will call operator function from the above ones
function operator(x, y, operator){
>>>>>>> parent of ae1fd2b (optimized the 4 operator functions)
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
<<<<<<< HEAD
            return "Error";
=======
            return null;
>>>>>>> parent of ae1fd2b (optimized the 4 operator functions)
    }
}

// Function to update the display
function updateDisplay(value) {
    const display = document.querySelector(".screen");
    display.textContent = value; // Set the display value directly
}

// Attach Event Listeners to Number Buttons
const numberButtons = document.querySelectorAll(".btn.number");
<<<<<<< HEAD
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        displayValue += event.target.textContent; // Append the clicked number
        updateDisplay(displayValue);
    });
});

// Pressing the operator button
const operatorButtons = document.querySelectorAll(".btn.operator");
operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (x === null) {
            x = parseFloat(displayValue);
        } else if (opType) {
            y = parseFloat(displayValue);
            x = operator(x, y, opType); // Evaluate and store result in x
            updateDisplay(x.toString());
        }
=======
numberButtons.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        updateDisplay(event.target.textContent);
    })
})
//pressing the operator button
const operatorButton = document.querySelectorAll(".btn.operator");
operatorButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        x = parseInt(displayValue);
>>>>>>> parent of ae1fd2b (optimized the 4 operator functions)
        opType = event.target.textContent;
        displayValue = "";
    });
});

// Pressing the equal button
const equalButton = document.querySelectorAll(".btn.unique");
<<<<<<< HEAD
equalButton.forEach(button => {
    button.addEventListener("click", () => {
        y = parseFloat(displayValue); // Use parseFloat for decimal numbers
        const result = operator(x, y, opType);
        displayValue = result.toString(); // Convert result to string for display
        updateDisplay(displayValue);
    });
});

// Pressing the C/AC buttons
const clean = document.querySelectorAll(".btn.clear");
clean.forEach(button => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent === "C") {
            displayValue = "";
            updateDisplay(displayValue);
        } else {
            displayValue = "";
            x = 0;
            y = 0;
            opType = null;
            updateDisplay(displayValue);
=======
equalButton.forEach(buttons => {
    buttons.addEventListener("click", (event) => {
        y = parseInt(displayValue);
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
>>>>>>> parent of ae1fd2b (optimized the 4 operator functions)
        }
    });
});