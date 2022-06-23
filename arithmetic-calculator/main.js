// Basic Arithmetic Calculator
// This calculator does:
// 1. Addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division (/)
// 5. Modulo Operations (%)

// ALGORITHM
// Step 1: prompt user for operator
// Step 2: store it in a variable
// Step 3: prompt user for first and second number
// Step 4: store it in a varibale
// Step 5: store the result of the operation
// Step 6: create conditional statements to perform operations
// Step 7: Alert the result of the operation to the user

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


