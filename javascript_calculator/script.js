



document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('button');
    const operators = document.querySelectorAll('.operator');
    let firstNumber = '';
    let secondNumber = '';
    let currentOperation = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                if (currentOperation === null) {
                    firstNumber = screen.value;
                    currentOperation = button.value;
                } else {
                    secondNumber = screen.value;
                    screen.value = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperation);
                    firstNumber = screen.value;
                    currentOperation = button.value;
                }
                screen.value = '';
            } else if (button.classList.contains('equal-sign')) {
                secondNumber = screen.value;
                screen.value = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperation);
                firstNumber = '';
                secondNumber = '';
                currentOperation = null;
            } else if (button.classList.contains('all-clear')) {
                screen.value = '';
                firstNumber = '';
                secondNumber = '';
                currentOperation = null;
            } else {
                screen.value += button.value;
            }
        });
    });

    function operate(first, second, operator) {
        switch (operator) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '/': return second !== 0 ? first / second : 'Error';
            default: return null;
        }
    }
});
