// Basic Arithmetic Calculator
// This calculator does:
// 1. Addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division (/)
// 5. Modulo Operations (%)

const op_list = prompt('Enter operator ( either +, -, *, / or % ): ');

const num1 = parseFloat(prompt("Enter your first number: "));
const num2 = parseFloat(prompt("Enter your second number: "));

let result;

if (op_list == "+") {
    result = num1 + num2;
}
else if (op_list == "-") {
    result = num1 - num2;
}
else if (op_list == "*") {
    result = num1 * num2;
}
else if (op_list == "/") {
    result = num1 / num2;
}
else {
    result = num1 % num2;
}

alert("Your result is: " + result);


