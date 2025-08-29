const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    // Replace ÷ and × symbols before evaluating
    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
  } catch {
    display.value = 'Error';
  }
}
