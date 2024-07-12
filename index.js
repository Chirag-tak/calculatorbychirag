
alert("Welcome to Our site");
let display = document.getElementById("display");
function clearDisplay() {
    display.value = "0";
}
function appendNumber(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}
function appendOperator(operator) {
    display.value += operator;
}
function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculateResult();
    }
    if (["*", "+", "-", "/"].includes(event.key)) {
        appendOperator(event.key);
    }
    if (event.key === "Backspace" || event.key === "Delete" || event.key === "B" || event.key === "b") {
        backspace();
    }
    if (event.key === "C" || event.key === "c") {
        clearDisplay();
    }
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(event.key)) {
        appendNumber(event.key);
    }
});
