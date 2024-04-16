const Calculator = (num1, num2, operator) => {
    return operators(num1, num2, operator);
}

const operators =  (num1, num2, operator) => ({
    "+" : () => num1 + num2,
    "-" : () => num1 - num2,
    "/" : () => num1 / num2,
    "*" : () => num1 * num2
})[operator]();

module.exports = Calculator