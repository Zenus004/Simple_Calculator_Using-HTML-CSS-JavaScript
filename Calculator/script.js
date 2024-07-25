let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let currentText = display.innerText;
    let lastChar = currentText.slice(-1);

    if ('+-*/%'.includes(lastChar)) {
        display.innerText = currentText.slice(0, -1) + operator + ' ';
    } else {
        display.innerText += operator + ' ';
    }
}

function backspace() {
    let currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1).trim();
    } else {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        let result = eval(display.innerText.replace(/x/g, '*').replace(/÷/g, '/').replace(/ /g, ''));
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}
