//popluate screen input
let displayValue = "";
//General variables for now
let x, y, operator;
// adding 4 functions add subtract multiply divide
function add(x, y){
    return x*y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

//empty function for now will take 2 numbers and 1 operator and according to the operator will call operator function from the above ones
function operator(x, y, operator){
    return;
}

//function that update the display
function updateDisplay(value){
    const display = document.querySelectorAll(".screen");
    displayValue += value;
    display.textContent = displayValue;
}