// script.js


let display = document.getElementById('display');
let scientificPanel = document.getElementById('scientific');
let isScientific = false;


function appendNumber(num) {
if(display.innerText === '0') display.innerText = num;
else display.innerText += num;
}


function appendOperator(op) {
display.innerText += op;
}


function clearDisplay() {
display.innerText = '0';
}


function backspace() {
display.innerText = display.innerText.slice(0, -1) || '0';
}


function calculate() {
try {
display.innerText = eval(display.innerText);
} catch {
display.innerText = 'Error';
}
}


function toggleScientific() {
isScientific = !isScientific;
scientificPanel.style.display = isScientific ? 'grid' : 'none';
}