// GET DISPLAY
const display = document.getElementById("display");

// OFF
function turnOff() {
    display.value = "CLOSED.";
}

// CLEAR DISPLAY
function clearDisplay() {
    display.value = "";
}

// DELETE LAST CHARACTER
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// ADD NUMBER
function appendNumber(number) {
    display.value += number;
}

// ADD OPERATOR
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);

    // prevent double operator (like ++ or */)
    if ("+-*/".includes(lastChar)) return;

    display.value += operator;
}

// ADD DECIMAL
function appendDecimal() {
    display.value += ".";
}

// EXP (exponentiation)
function toPower() {
    display.value += "**";
}

// CALCULATE RESULT
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "ERROR";
    }
}
