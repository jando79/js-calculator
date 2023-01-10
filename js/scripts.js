// business logic
function add(number1, number2) {
  total = "The sum is " + parseInt(number1 + number2) + ".";
}

function subtract(number1, number2) {
  difference = "The difference is " + parseInt(number1 - number2) + ".";
}

function multiply(number1, number2) {
  product = "The product is " + parseInt(number1 * number2) + ".";
}

function divide(number1, number2) {
  quotient = "The quotient is " + parseInt(number1 / number2) + "";
}




//user interface logic
const number1 = parseInt(prompt("enter a number:"));
const number2 = parseInt(prompt("enter another number:"));
//window.alert(add(number1, number2));

//window.alert(subtract(number1, number2));

//window.alert(multiply(number1, number2));

//window.alert(divide(number1, number2));
add(number1, number2);
subtract(number1, number2);
multiply(number1, number2);
divide(number1, number2);//

window.alert(total + " " + difference + " " + product + " " + quotient)